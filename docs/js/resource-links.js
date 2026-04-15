/**
 * Resolves study material paths for clickable source tags.
 *
 * - GitHub Pages (https://owner.github.io/repo/…): auto-builds
 *   https://github.com/owner/repo/blob/main/<path> so slides/transcripts open in GitHub.
 * - Local Live Server: resolves ../conceptual/… relative to the current page (open the
 *   repo folder in VS Code and use Go Live so URLs look like …/docs/index.html).
 * - Optional override: window.STUDY_RESOURCE_GITHUB_BASE = 'https://github.com/O/R/blob/main'
 */
(function (global) {
  const GITHUB_BASE =
    typeof global.STUDY_RESOURCE_GITHUB_BASE === 'string'
      ? global.STUDY_RESOURCE_GITHUB_BASE.replace(/\/$/, '')
      : '';

  /** Project Pages: owner.github.io/repo/ → { owner, repo } */
  function parseGitHubPagesSite() {
    const m = location.hostname.match(/^([^.]+)\.github\.io$/i);
    if (!m) return null;
    const owner = m[1];
    const parts = location.pathname.split('/').filter(Boolean);
    const repo = parts[0] || '';
    if (!repo) return null;
    return { owner, repo };
  }

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
    const norm = repoPath.replace(/\\/g, '/').replace(/^\/+/, '');
    const encoded = norm
      .split('/')
      .map((seg) => encodeURIComponent(seg))
      .join('/');

    if (GITHUB_BASE) {
      return `${GITHUB_BASE}/${encoded}`;
    }

    const pages = parseGitHubPagesSite();
    if (pages) {
      const o = encodeURIComponent(pages.owner);
      const r = encodeURIComponent(pages.repo);
      return `https://github.com/${o}/${r}/blob/main/${encoded}`;
    }

    /* Local: page is …/docs/index.html → ../conceptual/… is sibling of docs/ */
    try {
      return new URL(`../${encoded}`, location.href).href;
    } catch (e) {
      return `../${encoded}`;
    }
  }

  /**
   * Same repo path as hrefFromRepoPath, but use raw.githubusercontent.com for PDFs so the
   * browser opens the file inline (diagrams render). Blob URLs often force GitHub’s wrapper.
   */
  function hrefFromRepoPathRaw(repoPath) {
    const norm = repoPath.replace(/\\/g, '/').replace(/^\/+/, '');
    const encoded = norm
      .split('/')
      .map((seg) => encodeURIComponent(seg))
      .join('/');

    if (GITHUB_BASE) {
      const m = GITHUB_BASE.match(
        /github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)/i
      );
      if (m) {
        const o = m[1];
        const r = m[2];
        const branch = m[3];
        return `https://raw.githubusercontent.com/${o}/${r}/${branch}/${encoded}`;
      }
    }

    const pages = parseGitHubPagesSite();
    if (pages) {
      const o = encodeURIComponent(pages.owner);
      const r = encodeURIComponent(pages.repo);
      return `https://raw.githubusercontent.com/${o}/${r}/main/${encoded}`;
    }

    try {
      return new URL(`../${encoded}`, location.href).href;
    } catch (e) {
      return `../${encoded}`;
    }
  }

  /** conceptual/powerpoints/Deck.pptx → conceptual/powerpoints/pdf/Deck.pdf */
  function pdfExportPathFromPptx(pptxPath) {
    return pptxPath.replace(/\/([^/]+)\.pptx$/i, '/pdf/$1.pdf');
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
    const pdfPath = pdfExportPathFromPptx(deck.pptx);
    const pdfBase = hrefFromRepoPathRaw(pdfPath);
    const firstNum = frag ? frag.replace(/^#slide-/, '') : '';
    const pdfHref =
      pdfBase + (firstNum ? `#page=${firstNum}` : '');
    const hint =
      firstNum
        ? `View the exported PDF (same slides, pictures, and diagrams as class). Jumps to slide ${firstNum}. Also: plain text extract or download .pptx.`
        : `View the exported PDF (slides with pictures and diagrams). Also: text extract or download .pptx.`;
    return `<span class="source-tag source-tag--slide" title="${escapeHtml(hint)}"><a class="source-slide-link" href="${pdfHref}" target="_blank" rel="noopener">${label}</a><span class="source-slide-meta"> · <a href="${mdHref}" target="_blank" rel="noopener" title="Extracted text (searchable)">text</a> · <a href="${pptxHref}" target="_blank" rel="noopener" title="Download original PowerPoint">.pptx</a></span></span>`;
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
