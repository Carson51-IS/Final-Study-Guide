# IS 414 Final Exam Study Guide

Materials for BYU **IS 414** (Security & Controls) final exam prep: conceptual outlines, applied skills, lecture decks, and exported PDFs.

## Layout

- **`conceptual/`** — Conceptual exam prep (`basic study guide.md`, `powerpoints/`, `study videos/`)
- **`applied/`** — Applied / hands-on exam prep (`applied study guide.md`)

## Notes

- PowerPoint files live under `conceptual/powerpoints/`. PDF exports (for reading with diagrams) are in `conceptual/powerpoints/pdf/`.
- Raw recordings under `conceptual/study videos/` are **gitignored** (see `.gitignore`); **transcripts** (`.md`) are meant to be committed so the repo stays small.

## Transcribing study recordings (local PC: Core i7, 32GB RAM)

This repo’s transcripts were produced with **[faster-whisper](https://github.com/SYSTRAN/faster-whisper)** (Whisper on CPU). On a modern i7 with 32GB RAM you can use a **larger model than `tiny`** for better accuracy without running out of memory.

### 1. Install prerequisites (Windows)

1. **FFmpeg** on your PATH (required to decode `.m4a`, `.mp4`, etc.). Easiest: `winget install Gyan.FFmpeg` (or another full FFmpeg build), then open a **new** terminal so `ffmpeg` is recognized.
2. **Python 3** and pip, then:

```bash
pip install faster-whisper
```

Optional: set `HF_TOKEN` if Hugging Face rate-limits model downloads; not required for a one-off install.

### 2. Copy the file off OneDrive before transcribing

If your project lives under **OneDrive**, copy each recording to a **local folder** (for example `%TEMP%\whisper_in\`) and run transcription there. Reading multi-gigabyte media straight from synced folders can stall or crawl; local disk I/O is much more reliable.

### 3. Pick a model (CPU, `int8`)

| Model | Speed vs quality (typical on CPU) |
|--------|-----------------------------------|
| `tiny` | Fastest; more mistakes.           |
| `base` | Good balance for long meetings. |
| `small` | **Recommended default** on an i7 with 32GB RAM: noticeably better text than `base`, still practical for hour-long files. |

Use `device="cpu"` and `compute_type="int8"` unless you have a **CUDA** GPU (then prefer `device="cuda"` and a compatible `compute_type` per faster-whisper docs).

### 4. Minimal Python example → Markdown

Save as a script or run in a REPL; adjust the model name (`small`, `base`, …), paths, and `beam_size` (`5` = better quality, slower than `1`).

```python
from pathlib import Path
from faster_whisper import WhisperModel

audio = Path(r"C:\path\to\local\copy\recording.m4a")
out_md = Path(r"C:\path\to\GMT20260414-153426_Recording-transcript.md")

def fmt_ts(sec: float) -> str:
    sec = int(sec)
    m, s = divmod(sec, 60)
    h, m = divmod(m, 60)
    return f"{h:d}:{m:02d}:{s:02d}" if h else f"{m:02d}:{s:02d}"

model = WhisperModel("small", device="cpu", compute_type="int8")
segments, info = model.transcribe(
    str(audio),
    beam_size=5,
    language="en",
    vad_filter=True,
)

lines = [
    "# Study session transcript",
    "",
    f"**Source:** `{audio.name}`",
    f"**Detected language:** {info.language} (probability {info.language_probability:.2f})",
    "",
    "Auto-generated with faster-whisper. Expect minor errors.",
    "",
    "---",
    "",
]
for seg in segments:
    lines.append(f"**[{fmt_ts(seg.start)}]** {seg.text.strip()}")
    lines.append("")

out_md.write_text("\n".join(lines), encoding="utf-8")
print("Wrote", out_md)
```

Place the resulting `.md` next to the recording under `conceptual/study videos/` (or wherever you keep transcripts). **Do not commit** the raw `.m4a` / video files; **do commit** the `.md` transcript.

### 5. Batch tip

For many files, run **one transcription at a time** on CPU so each job gets full cores; starting many Whisper processes in parallel usually slows everything down unless you add a GPU or split work across machines.
