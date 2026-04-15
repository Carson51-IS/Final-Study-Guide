/**
 * Resolves study material paths for clickable source tags.
 *
 * GitHub Pages only publishes /docs — repo files are NOT on that host unless you use full GitHub links. Set:
 *   window.STUDY_RESOURCE_GITHUB_BASE = 'https://github.com/YOU/REPO/blob/main';
 * (no trailing slash). Leave unset for relative ../conceptual/... (works with Live Server when docs/ is one level below repo root).
 */
(function (global) {
  const GITHUB_BASE =
    typeof global.STUDY_RESOURCE_GITHUB_BASE === 'string'
      ? global.STUDY_RESOURCE_GITHUB_BASE.replace(/\/$/, '')
      : '';

  /** Map normalized deck title (lowercase) → filenames under conceptual/powerpoints/ */
  const SLIDE_DECKS = {
    '03 fraud w26': {
      md: 'conceptual/powerpoints/extracted_text/03 Fraud W26.md',
      pptx: 'conceptual/powerpoints/03 Fraud W26.pptx',
    },
    '10 organizational security': {
      md: 'conceptual/powerpoints/extracted_text/10 Organizational Security.md',
      pptx: 'conceptual/powerpoints/10 Organizational Security.pptx',
    },
    '09 incident response': {
      md: 'conceptual/powerpoints/extracted_text/09 Incident Response.md',
      pptx: 'conceptual/powerpoints/09 Incident Response.pptx',
    },
    '09a tabletop exercise': {
      md: 'conceptual/powerpoints/extracted_text/09A Cybersecurity Tabletop Exercise.md',
      pptx: 'conceptual/powerpoints/09A Cybersecurity Tabletop Exercise.pptx',
    },
    '09a cybersecurity tabletop exercise': {
      md: 'conceptual/powerpoints/extracted_text/09A Cybersecurity Tabletop Exercise.md',
      pptx: 'conceptual/powerpoints/09A Cybersecurity Tabletop Exercise.pptx',
    },
    '11 information privacy': {
      md: 'conceptual/powerpoints/extracted_text/11 Information Privacy.md',
      pptx: 'conceptual/powerpoints/11 Information Privacy.pptx',
    },
    'sony pictures': {
      md: 'conceptual/powerpoints/extracted_text/Sony Pictures.md',
      pptx: 'conceptual/powerpoints/Sony Pictures.pptx',
    },
    '12 cryptography - modern ciphers': {
      md: 'conceptual/powerpoints/extracted_text/12 Cryptography - Modern Ciphers.md',
      pptx: 'conceptual/powerpoints/12 Cryptography - Modern Ciphers.pptx',
    },
    '11 cryptography - introduction': {
      md: 'conceptual/powerpoints/extracted_text/11 Cryptography - Introduction.md',
      pptx: 'conceptual/powerpoints/11 Cryptography - Introduction.pptx',
    },
    '13 authentication': {
      md: 'conceptual/powerpoints/extracted_text/13 Authentication & Authorization.md',
      pptx: 'conceptual/powerpoints/13 Authentication & Authorization.pptx',
    },
    '13 authentication & authorization': {
      md: 'conceptual/powerpoints/extracted_text/13 Authentication & Authorization.md',
      pptx: 'conceptual/powerpoints/13 Authentication & Authorization.pptx',
    },
    'hb gary federal hack': {
      md: 'conceptual/powerpoints/extracted_text/HB Gary Federal Hack.md',
      pptx: 'conceptual/powerpoints/HB Gary Federal Hack.pptx',
    },
    '12 physical security': {
      md: 'conceptual/powerpoints/extracted_text/12 Physical Security.md',
      pptx: 'conceptual/powerpoints/12 Physical Security.pptx',
    },
    cybersecurityjobs: {
      md: 'conceptual/powerpoints/extracted_text/CybersecurityJobs.md',
      pptx: 'conceptual/powerpoints/CybersecurityJobs.pptx',
    },
  };

  const TRANSCRIPT_INDEX =
    'conceptual/study videos/transcripts/README.md';

  /** First transcript .md per day (matches transcripts/README.md order). */
  const TRANSCRIPT_FIRST_FILE = {
    '2026-03-09':
      'conceptual/study videos/transcripts/2026-03-09/GMT20260309-152407_Recording-transcript.md',
    '2026-03-11':
      'conceptual/study videos/transcripts/2026-03-11/GMT20260311-155657_Recording-transcript.md',
    '2026-03-12':
      'conceptual/study videos/transcripts/2026-03-12/GMT20260312-140223_Recording-transcript.md',
    '2026-03-17':
      'conceptual/study videos/transcripts/2026-03-17/GMT20260317-140245_Recording-transcript.md',
    '2026-03-19':
      'conceptual/study videos/transcripts/2026-03-19/GMT20260319-200156_Recording-transcript.md',
    '2026-03-24':
      'conceptual/study videos/transcripts/2026-03-24/GMT20260324-142844_Recording-transcript.md',
    '2026-03-26':
      'conceptual/study videos/transcripts/2026-03-26/GMT20260326-185417_Recording-transcript.md',
    '2026-03-31':
      'conceptual/study videos/transcripts/2026-03-31/GMT20260331-135914_Recording-transcript.md',
    '2026-04-02':
      'conceptual/study videos/transcripts/2026-04-02/GMT20260402-141054_Recording-transcript.md',
    '2026-04-14':
      'conceptual/study videos/transcripts/2026-04-14/GMT20260414-140710_Recording-transcript.md',
  };

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function hrefFromRepoPath(repoPath) {
    const norm = repoPath.replace(/\\/g, '/');
    const encoded = norm
      .split('/')
      .map((seg) => encodeURIComponent(seg))
      .join('/');
    if (GITHUB_BASE) return `${GITHUB_BASE}/${encoded}`;
    return `../${encoded}`;
  }

  /**
   * Extracted decks use "## Slide N" — GitHub (and most viewers) anchor as #slide-N.
   */
  function markdownSlideFragment(slidesNote) {
    if (!slidesNote) return '';
    const m = String(slidesNote).match(/\d+/);
    if (!m) return '';
    return `#slide-${m[0]}`;
  }

  function formatSlideSource(raw) {
    let rest = raw.replace(/^Slide:\s*/i, '').trim();
    let slidesNote = '';
    const slideMatch = rest.match(/^(.*?),\s*slides?\s+(.+)$/i);
    if (slideMatch) {
      rest = slideMatch[1].trim();
      slidesNote = slideMatch[2].trim();
    }
    const key = rest.toLowerCase();
    const deck = SLIDE_DECKS[key];
    const label = escapeHtml(raw);
    if (!deck) {
      return `<span class="source-tag" title="${label}">${label}</span>`;
    }
    const mdBase = hrefFromRepoPath(deck.md);
    const frag = markdownSlideFragment(slidesNote);
    const mdHref = mdBase + frag;
    const pptxHref = hrefFromRepoPath(deck.pptx);
    const firstNum = frag ? frag.replace(/^#slide-/, '') : '';
    const hint =
      firstNum
        ? `Opens the slide extract and jumps to “Slide ${firstNum}” (same wording as in class).`
        : 'Opens the full slide extract in Markdown (same content as the PowerPoint).';
    return `<span class="source-tag source-tag--slide" title="${escapeHtml(hint)}"><a class="source-slide-link" href="${mdHref}" target="_blank" rel="noopener">${label}</a><span class="source-slide-meta"> · <a href="${pptxHref}" target="_blank" rel="noopener" title="Download original PowerPoint file">.pptx</a></span></span>`;
  }

  function formatTranscriptSource(raw) {
    const dates = raw.match(/\d{4}-\d{2}-\d{2}/g) || [];
    const uniq = [...new Set(dates)];
    const indexHref = hrefFromRepoPath(TRANSCRIPT_INDEX);
    if (!uniq.length) {
      return `<span class="source-tag source-tag--tx"><a href="${indexHref}" target="_blank" rel="noopener">${escapeHtml(raw)}</a></span>`;
    }
    const intro = raw.replace(/^Transcripts?:\s*/i, '').trim();
    const dateLinks = uniq
      .map((d) => {
        const file = TRANSCRIPT_FIRST_FILE[d];
        const mdHref = file ? hrefFromRepoPath(file) : indexHref;
        const title = file
          ? `Open transcript (first session on ${d}). More sessions: index.`
          : `Transcript index for ${d}`;
        return `<a href="${mdHref}" target="_blank" rel="noopener" title="${escapeHtml(title)}">${d}</a> · <a href="${indexHref}#${d}" target="_blank" rel="noopener" class="source-tx-all" title="All sessions this day">all</a>`;
      })
      .join(', ');
    return `<span class="source-tag source-tag--tx"><span class="source-tag-label">Transcripts:</span> ${dateLinks} <span class="source-tx-hint" title="${escapeHtml(intro)}"></span></span>`;
  }

  function formatOtherSource(raw) {
    if (/bbc\s*podcast|missing crypto queen/i.test(raw)) {
      const url =
        'https://www.bbc.co.uk/sounds/brand/p0d39gyk';
      return `<span class="source-tag source-tag--ext"><a href="${url}" target="_blank" rel="noopener">${escapeHtml(raw)}</a></span>`;
    }
    return `<span class="source-tag">${escapeHtml(raw)}</span>`;
  }

  function formatSourceTag(raw) {
    const t = raw.trim();
    if (/^slide:/i.test(t)) return formatSlideSource(t);
    if (/^transcripts?:/i.test(t)) return formatTranscriptSource(t);
    return formatOtherSource(t);
  }

  global.formatStudySourceTag = formatSourceTag;
  global.STUDY_RESOURCE_HREF = hrefFromRepoPath;
})(typeof window !== 'undefined' ? window : this);
