# IS 414 Final Exam Study Guide

Materials for BYU **IS 414** (Security & Controls) final exam prep: conceptual outlines, applied skills, lecture decks, and exported PDFs.

## Layout

- **`conceptual/`** — Conceptual exam prep (`basic study guide.md`, `powerpoints/`, `study videos/` with `study videos/transcripts/` for dated Markdown transcripts)
- **`applied/`** — Applied / hands-on exam prep (`applied study guide.md`)

## Notes

- PowerPoint files live under `conceptual/powerpoints/`. PDF exports (for reading with diagrams) are in `conceptual/powerpoints/pdf/`.
<<<<<<< HEAD

## Study video transcripts

Recordings (`.m4a`, etc.) under `conceptual/study videos/` are **gitignored**. Transcripts live under `conceptual/study videos/transcripts/YYYY-MM-DD/` (date parsed from the `GMTYYYYMMDD-HHMMSS` prefix in the filename). A chronological index is in `conceptual/study videos/transcripts/README.md` when generated.

**Prerequisites**

- Python 3 with dependencies: `pip install -r requirements-transcribe.txt` (installs PyAV, which usually decodes `.m4a` on Windows without a separate FFmpeg install).
- If decoding fails, install [FFmpeg](https://ffmpeg.org/) and add it to your `PATH`.

**Generate or refresh transcripts** (from the repo root):

```bash
python tools/transcribe_study_videos.py --write-index
```

- Existing transcript files are skipped unless you pass `--force`.
- Default model is Whisper **tiny** on **CPU** (`--model base` or `--model small` for better accuracy; `--device cuda` with `--compute-type float16` if you have a suitable GPU).

See `python tools/transcribe_study_videos.py --help` for all options.
=======
- Raw recordings under `conceptual/study videos/` are **gitignored** (see `.gitignore`); **transcripts** (`.md`) are meant to be committed so the repo stays small.

## Transcribing study recordings (local PC: Core i7, 32GB RAM, RTX 3060)

This repo’s transcripts were produced with **[faster-whisper](https://github.com/SYSTRAN/faster-whisper)**. **Prefer your RTX 3060** when CUDA is working: the same Whisper model usually runs **much faster** on the GPU than on the CPU, so you can pick **`small`** or even **`medium`** without waiting all day.

### 1. Install prerequisites (Windows)

1. **FFmpeg** on your PATH (required to decode `.m4a`, `.mp4`, etc.). Easiest: `winget install Gyan.FFmpeg` (or another full FFmpeg build), then open a **new** terminal so `ffmpeg` is recognized.
2. **NVIDIA driver** — install or update to a current driver so CUDA apps can see the **3060**.
3. **Python 3** and pip, then:

```bash
pip install faster-whisper
```

GPU support comes from **CTranslate2** (pulled in by faster-whisper). If `device="cuda"` fails with a missing CUDA / library error, follow the **[official faster-whisper installation section](https://github.com/SYSTRAN/faster-whisper#installation)** (and linked CTranslate2 docs) for your Python version and CUDA stack—Windows setups vary, so use their steps rather than guessing driver/CUDA combinations.

Optional: set `HF_TOKEN` if Hugging Face rate-limits model downloads; not required for a one-off install.

### 2. Copy the file off OneDrive before transcribing

If your project lives under **OneDrive**, copy each recording to a **local folder** (for example `%TEMP%\whisper_in\`) and run transcription there. Reading multi-gigabyte media straight from synced folders can stall or crawl; local disk I/O is much more reliable.

### 3. Pick a model and device

**GPU (RTX 3060)** — recommended when CUDA works:

| Model | Notes on a 3060 |
|--------|------------------|
| `small` | **Solid default:** great quality; fits comfortably on a typical **12GB** desktop 3060 for lecture-length files. |
| `medium` | Often fine for ~1-hour audio on 12GB; slower than `small` but better wording. If you hit **out-of-memory** errors, use `small` or enable shorter chunks (see faster-whisper docs). |
| `base` / `tiny` | Use if you need maximum speed or have a **lower-VRAM** SKU (some laptop 3060s are 6GB). |

Use `device="cuda"` and `compute_type="float16"` (good default on NVIDIA). If something fails to load, check faster-whisper / CTranslate2 docs for other allowed `compute_type` values on your install.

**CPU only** (fallback if CUDA is not set up):

| Model | Speed vs quality (typical on CPU) |
|--------|-----------------------------------|
| `tiny` | Fastest; more mistakes. |
| `base` | Good balance for long meetings. |
| `small` | **Recommended on CPU** with 32GB RAM: better text than `base`, still practical for hour-long files. |

Use `device="cpu"` and `compute_type="int8"`.

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

# Prefer GPU on RTX 3060 (much faster than CPU for the same model):
model = WhisperModel("small", device="cuda", compute_type="float16")
# CPU fallback if CUDA is not available:
# model = WhisperModel("small", device="cpu", compute_type="int8")
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

- **GPU:** Run **one transcription at a time** on a single 3060 so each job gets the full card; two heavy jobs in parallel can **slow things down** or hit **VRAM limits** (especially with `medium` on 6–8GB cards).
- **CPU:** Same idea—one job at a time usually uses cores best unless you deliberately split work across machines.
>>>>>>> 05dcf8ef2571ec8450f992c9fcace44e1e4035e2
