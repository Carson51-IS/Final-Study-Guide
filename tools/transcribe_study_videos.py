#!/usr/bin/env python3
"""
Transcribe Zoom-style study recordings under conceptual/study videos/ into Markdown.

Outputs: conceptual/study videos/transcripts/YYYY-MM-DD/<basename>-transcript.md
"""

from __future__ import annotations

import argparse
import re
import sys
from dataclasses import dataclass
from pathlib import Path

GMT_NAME = re.compile(r"^GMT(\d{8})-(\d{6})_.*\.m4a$", re.IGNORECASE)


def repo_root() -> Path:
    return Path(__file__).resolve().parent.parent


def study_videos_dir(root: Path) -> Path:
    return root / "conceptual" / "study videos"


def format_timestamp(seconds: float) -> str:
    s = int(round(seconds))
    if s >= 3600:
        h, rem = divmod(s, 3600)
        m, sec = divmod(rem, 60)
        return f"{h:02d}:{m:02d}:{sec:02d}"
    m, sec = divmod(s, 60)
    return f"{m:02d}:{sec:02d}"


def parse_gmt_stem(name: str) -> tuple[str, str] | None:
    """Return (YYYY-MM-DD, full stem without extension) or None."""
    m = GMT_NAME.match(name)
    if not m:
        return None
    ymd, hms = m.group(1), m.group(2)
    date_folder = f"{ymd[:4]}-{ymd[4:6]}-{ymd[6:8]}"
    return date_folder, Path(name).stem


def discover_m4a(study_dir: Path) -> list[Path]:
    out: list[Path] = []
    for p in sorted(study_dir.rglob("*.m4a")):
        if "transcripts" in p.parts:
            continue
        if GMT_NAME.match(p.name):
            out.append(p)
    return out


def write_transcript_md(
    dest: Path,
    source_name: str,
    language: str,
    language_probability: float,
    model_size: str,
    device_label: str,
    lines: list[tuple[str, str]],
) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    prob = f"{language_probability:.2f}"
    body = "\n".join(f"**[{ts}]** {text}" for ts, text in lines)
    content = f"""# Study session transcript

**Source:** `{source_name}`
**Detected language:** {language} (probability {prob})

Auto-generated with faster-whisper (Whisper **{model_size}**, {device_label}). Expect minor errors.

---
{body}
"""
    dest.write_text(content, encoding="utf-8")


@dataclass
class IndexEntry:
    date_folder: str
    transcript_rel: str
    source_name: str


def collect_index_from_disk(transcripts_root: Path) -> list[IndexEntry]:
    entries: list[IndexEntry] = []
    if not transcripts_root.is_dir():
        return entries
    for md in sorted(transcripts_root.rglob("*-transcript.md")):
        rel = md.relative_to(transcripts_root)
        parts = rel.parts
        if len(parts) != 2:
            continue
        date_folder, fname = parts[0], parts[1]
        stem = Path(fname).stem
        suffix = "-transcript"
        if not stem.endswith(suffix):
            continue
        source_name = stem[: -len(suffix)] + ".m4a"
        entries.append(
            IndexEntry(
                date_folder=date_folder,
                transcript_rel=rel.as_posix(),
                source_name=source_name,
            )
        )
    return entries


def write_index(transcripts_root: Path, entries: list[IndexEntry]) -> None:
    lines = [
        "# Study video transcripts",
        "",
        "Chronological index (by recording date in filename, GMT).",
        "",
    ]
    by_date: dict[str, list[IndexEntry]] = {}
    for e in entries:
        by_date.setdefault(e.date_folder, []).append(e)
    for date in sorted(by_date.keys()):
        lines.append(f"## {date}")
        lines.append("")
        for e in sorted(by_date[date], key=lambda x: x.source_name):
            lines.append(f"- [{e.source_name}]({e.transcript_rel})")
        lines.append("")
    (transcripts_root / "README.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Transcribe study video .m4a files to Markdown.")
    parser.add_argument(
        "--model",
        default="tiny",
        help="Whisper model size (default: tiny). Examples: tiny, base, small, medium",
    )
    parser.add_argument(
        "--device",
        default="cpu",
        help="Inference device (default: cpu). Use cuda if available.",
    )
    parser.add_argument(
        "--compute-type",
        default="int8",
        help="Compute type for faster-whisper (default: int8). On GPU try float16.",
    )
    parser.add_argument("--force", action="store_true", help="Overwrite existing transcript files.")
    parser.add_argument(
        "--write-index",
        action="store_true",
        help="Write conceptual/study videos/transcripts/README.md index after run.",
    )
    args = parser.parse_args()

    root = repo_root()
    study = study_videos_dir(root)
    if not study.is_dir():
        print(f"Missing directory: {study}", file=sys.stderr)
        return 1

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print(
            "Install faster-whisper: pip install -r requirements-transcribe.txt",
            file=sys.stderr,
        )
        return 1

    files = discover_m4a(study)
    if not files:
        print(f"No GMT*.m4a files found under {study}", file=sys.stderr)
        return 1

    transcripts_root = study / "transcripts"
    device_label = args.device.upper() if args.device.lower() == "cpu" else args.device

    print(f"Loading model {args.model} ({args.device}, {args.compute_type})…")
    model = WhisperModel(
        args.model,
        device=args.device,
        compute_type=args.compute_type,
    )

    processed = skipped = errors = 0

    for audio_path in files:
        parsed = parse_gmt_stem(audio_path.name)
        if not parsed:
            print(f"Skip (unrecognized name): {audio_path.name}", file=sys.stderr)
            errors += 1
            continue
        date_folder, stem = parsed
        dest = transcripts_root / date_folder / f"{stem}-transcript.md"

        if dest.exists() and not args.force:
            print(f"Skip (exists): {dest.relative_to(root)}")
            skipped += 1
            continue

        print(f"Transcribing: {audio_path.relative_to(root)}")
        try:
            segments, info = model.transcribe(
                str(audio_path),
                beam_size=5,
                language=None,
            )
            lines: list[tuple[str, str]] = []
            for seg in segments:
                ts = format_timestamp(seg.start)
                text = (seg.text or "").strip()
                if text:
                    lines.append((ts, text))
            lang = info.language or "unknown"
            prob = float(info.language_probability or 0.0)
            write_transcript_md(
                dest,
                audio_path.name,
                lang,
                prob,
                args.model,
                device_label,
                lines,
            )
            processed += 1
        except Exception as ex:  # noqa: BLE001
            print(f"Error on {audio_path}: {ex}", file=sys.stderr)
            errors += 1

    print(f"Done. Processed: {processed}, skipped: {skipped}, errors: {errors}")

    if args.write_index:
        index_entries = collect_index_from_disk(transcripts_root)
        if index_entries:
            write_index(transcripts_root, index_entries)
            print(f"Wrote index: {transcripts_root / 'README.md'}")

    return 0 if errors == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
