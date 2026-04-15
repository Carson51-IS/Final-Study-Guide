# IS 414 Final Exam Study Guide

Materials for BYU **IS 414** (Security & Controls) final exam prep: conceptual outlines, applied skills, lecture decks, and exported PDFs.

## Layout

- **`conceptual/`** — Conceptual exam prep (`basic study guide.md`, `powerpoints/`, `study videos/` with `study videos/transcripts/` for dated Markdown transcripts)
- **`applied/`** — Applied / hands-on exam prep (`applied study guide.md`)

## Notes

- PowerPoint files live under `conceptual/powerpoints/`. PDF exports (for reading with diagrams) are in `conceptual/powerpoints/pdf/`.

## Study website (`docs/`)

Static study guide + quiz for the final.

**Local (Go Live):** Open the **whole repository folder** in VS Code. Click **Go Live** — a root `index.html` redirects you to `docs/index.html` so you don’t see the folder listing. If you ever open the site without that redirect, use `http://127.0.0.1:5500/docs/index.html` (port may differ). Source links use `../conceptual/...` from the study guide so they hit your local slide extracts and transcripts.

**GitHub Pages:** Settings → Pages → deploy from the **`/docs`** folder on **`main`**. The site is `https://<user>.github.io/<repo>/`. Slide and transcript links automatically use `https://github.com/<user>/<repo>/blob/main/...` (including `#slide-N`), so they work on GitHub without setting variables.

If your default branch is not `main`, add before `resource-links.js` in `docs/index.html`:

`window.STUDY_RESOURCE_GITHUB_BASE = 'https://github.com/OWNER/REPO/blob/master';`

## Study video transcripts

Recordings (`.m4a`, etc.) under `conceptual/study videos/` are **gitignored**. Transcripts live under `conceptual/study videos/transcripts/YYYY-MM-DD/` (date parsed from the `GMTYYYYMMDD-HHMMSS` prefix in the filename). A chronological index is in `conceptual/study videos/transcripts/README.md` when generated. **Commit** transcript `.md` files; keep raw media out of git.

**Prerequisites**

- Python 3 with dependencies: `pip install -r requirements-transcribe.txt` (installs PyAV, which usually decodes `.m4a` on Windows without a separate FFmpeg install).
- If decoding fails, install [FFmpeg](https://ffmpeg.org/) and add it to your `PATH`.

**Generate or refresh transcripts** (from the repo root):

```bash
python tools/transcribe_study_videos.py --write-index
```

- Existing transcript files are skipped unless you pass `--force`.
- Default model is Whisper **tiny** on **CPU** (`--model base` or `--model small` for better accuracy; `--device cuda` with `--compute-type float16` if you have a suitable GPU).
- If the project lives on **OneDrive**, consider copying long recordings to a local folder before transcribing for faster, more reliable I/O.

See `python tools/transcribe_study_videos.py --help` for all options.
