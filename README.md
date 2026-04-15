# IS 414 Final Exam Study Guide

Materials for BYU **IS 414** (Security & Controls) final exam prep: conceptual outlines, applied skills, lecture decks, and exported PDFs.

## Layout

- **`conceptual/`** — Conceptual exam prep (`basic study guide.md`, `powerpoints/`, `study videos/` with `study videos/transcripts/` for dated Markdown transcripts)
- **`applied/`** — Applied / hands-on exam prep (`applied study guide.md`)

## Notes

- PowerPoint files live under `conceptual/powerpoints/`. PDF exports (for reading with diagrams) are in `conceptual/powerpoints/pdf/`.

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
