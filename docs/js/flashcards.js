(function(){
  const TOPICS = [
    { key: 'fraud', label: 'Fraud', badge: 'fraud' },
    { key: 'incident-response', label: 'Incident Response', badge: 'ir' },
    { key: 'privacy', label: 'Privacy', badge: 'privacy' },
    { key: 'sony', label: 'Sony Pictures', badge: 'sony' },
    { key: 'crypto', label: 'Cryptography', badge: 'crypto' },
    { key: 'auth', label: 'Authentication', badge: 'auth' },
    { key: 'hbgary', label: 'HBGary Federal', badge: 'hbgary' }
  ];

  const setupEl = document.getElementById('fc-setup');
  const areaEl = document.getElementById('fc-area');
  const topicBox = document.getElementById('fc-topic-checks');
  const countInput = document.getElementById('fc-count');
  const maxLabel = document.getElementById('fc-max-label');
  const startBtn = document.getElementById('fc-start-btn');
  const endBtn = document.getElementById('fc-end-btn');
  const prevBtn = document.getElementById('fc-prev-btn');
  const nextBtn = document.getElementById('fc-next-btn');
  const progressEl = document.getElementById('fc-progress');
  const progBar = document.getElementById('fc-progress-bar');
  const fcCard = document.getElementById('fc-card');
  const fcFront = document.getElementById('fc-front');
  const fcBack = document.getElementById('fc-back');
  const hintFront = document.getElementById('fc-hint-front');
  const hintBack = document.getElementById('fc-hint-back');
  const studyBackdrop = document.getElementById('study-panel-backdrop');
  const studyPanel = document.getElementById('study-panel');
  const studyPanelBody = document.getElementById('study-panel-body');
  const studyPanelHeading = document.getElementById('study-panel-heading');
  const studyPanelClose = document.getElementById('study-panel-close');

  let pool = [];
  let current = 0;
  let flipped = false;

  function escapeHtml(s){
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function studyGuideHash(q){
    return typeof studyGuideHashFromRef === 'function'
      ? studyGuideHashFromRef(q.topic, q.sourceRef)
      : q.topic;
  }

  function studyActionsRow(q){
    const sgHash = studyGuideHash(q);
    return `<div class="exp-ref study-actions">
      <button type="button" class="btn btn-link" data-study-panel="${q.id}">Slides & notes</button>
      <span class="study-actions-sep">·</span>
      <a href="index.html#${sgHash}" target="_blank" rel="noopener" class="btn-link">Full study guide</a>
      <span class="study-actions-ref">\u{1F4D6} ${escapeHtml(q.sourceRef || '')}</span>
    </div>`;
  }

  function findStudyPoints(topicKey, sourceRef){
    if(typeof getStudyAnchorFromRef !== 'function') return [];
    return getStudyAnchorFromRef(topicKey, sourceRef).points;
  }

  function resolveQuestionById(id){
    const inPool = pool.find(x => x.id === id);
    if(inPool) return inPool;
    return QUIZ_DATA.find(x => x.id === id);
  }

  function openStudyPanel(q){
    if(!studyPanel || !studyPanelBody) return;
    const section = typeof STUDY_DATA !== 'undefined' ? STUDY_DATA.find(s => s.id === q.topic) : null;
    const points = findStudyPoints(q.topic, q.sourceRef);
    const title = section ? section.title : (TOPICS.find(t => t.key === q.topic)?.label || q.topic);

    let html = `<p class="study-panel-ref"><strong>Reference:</strong> ${escapeHtml(q.sourceRef || '')}</p>`;
    if(!points.length){
      const h = escapeHtml(studyGuideHash(q));
      html += `<p style="color:var(--text-muted)">No matching section in the embedded guide. <a href="index.html#${h}" target="_blank" rel="noopener">Open full study guide</a>.</p>`;
    } else {
      points.forEach(p => {
        html += `<div class="study-panel-block"><h4>${escapeHtml(p.bullet)}</h4><div class="study-panel-detail">${p.detail}</div>`;
        if(p.sources && p.sources.length){
          html += '<div class="study-panel-sources">' + p.sources.map(s =>
            typeof formatStudySourceTag === 'function' ? formatStudySourceTag(s) : `<span class="source-tag">${escapeHtml(s)}</span>`
          ).join('') + '</div>';
        }
        html += '</div>';
      });
    }

    studyPanelHeading.textContent = title;
    studyPanelBody.innerHTML = html;
    studyBackdrop.classList.add('study-panel--open');
    studyPanel.classList.add('study-panel--open');
    studyBackdrop.setAttribute('aria-hidden', 'false');
    studyPanel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeStudyPanel(){
    if(!studyPanel) return;
    studyBackdrop.classList.remove('study-panel--open');
    studyPanel.classList.remove('study-panel--open');
    studyBackdrop.setAttribute('aria-hidden', 'true');
    studyPanel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function correctAnswerBlock(q){
    if(q.type === 'multi'){
      const lines = [...q.correct].sort((a, b) => a - b).map(i =>
        `<li>${escapeHtml(q.choices[i])}</li>`
      ).join('');
      return `<p class="fc-back-label">Correct (select all):</p><ul class="fc-answer-list">${lines}</ul>`;
    }
    return `<p class="fc-back-label">Answer:</p><p class="fc-answer-single">${escapeHtml(q.choices[q.correct])}</p>`;
  }

  function setFlipped(on){
    flipped = on;
    fcCard.classList.toggle('is-flipped', on);
    fcCard.setAttribute('aria-pressed', on ? 'true' : 'false');
    hintFront.classList.toggle('hidden', on);
    hintBack.classList.toggle('hidden', !on);
  }

  function toggleFlip(){
    setFlipped(!flipped);
  }

  function renderCard(){
    const q = pool[current];
    const n = pool.length;
    const pct = n ? ((current + 1) / n * 100).toFixed(0) : '0';
    progressEl.textContent = `Card ${current + 1} of ${n}`;
    progBar.style.width = pct + '%';

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= n - 1;

    setFlipped(false);

    const topicObj = TOPICS.find(t => t.key === q.topic);
    const topicLabel = topicObj?.label || q.topic;
    const badgeCls = topicObj?.badge || q.topic;
    const multiNote = q.type === 'multi'
      ? '<p class="fc-multi-note">(All correct choices — see back)</p>'
      : '';

    fcFront.innerHTML = `
      <div class="fc-front-inner">
        <span class="topic-badge ${badgeCls}">${escapeHtml(topicLabel)}</span>
        ${multiNote}
        <p class="fc-question">${escapeHtml(q.question)}</p>
      </div>`;

    fcBack.innerHTML = `
      <div class="fc-back-inner">
        ${correctAnswerBlock(q)}
        <div class="fc-explanation">
          <p class="fc-back-label">Why</p>
          <p>${escapeHtml(q.explanation)}</p>
        </div>
        ${studyActionsRow(q)}
      </div>`;

    fcCard.focus({ preventScroll: true });
  }

  const allLabel = document.createElement('label');
  allLabel.innerHTML = '<input type="checkbox" id="fc-cb-all" checked><span>All Topics</span>';
  topicBox.appendChild(allLabel);

  TOPICS.forEach(t => {
    const lbl = document.createElement('label');
    lbl.innerHTML = `<input type="checkbox" class="fc-topic-cb" value="${t.key}" checked><span>${t.label}</span>`;
    topicBox.appendChild(lbl);
  });

  const allCb = document.getElementById('fc-cb-all');
  const topicCbs = document.querySelectorAll('.fc-topic-cb');

  allCb.addEventListener('change', () => {
    topicCbs.forEach(cb => { cb.checked = allCb.checked; });
    updateMax();
  });
  topicCbs.forEach(cb => cb.addEventListener('change', () => {
    allCb.checked = [...topicCbs].every(c => c.checked);
    updateMax();
  }));

  function getSelectedTopics(){
    return [...topicCbs].filter(c => c.checked).map(c => c.value);
  }

  function updateMax(){
    const topics = getSelectedTopics();
    const count = QUIZ_DATA.filter(q => topics.includes(q.topic)).length;
    maxLabel.textContent = `/ ${count} available`;
    if(+countInput.value > count) countInput.value = Math.max(1, count);
    countInput.max = Math.max(1, count);
  }
  updateMax();
  countInput.addEventListener('input', updateMax);

  startBtn.addEventListener('click', () => {
    const topics = getSelectedTopics();
    if(!topics.length){
      alert('Select at least one topic.');
      return;
    }
    let filtered = QUIZ_DATA.filter(q => topics.includes(q.topic));
    shuffle(filtered);
    if(!filtered.length){
      alert('No cards match your filters.');
      return;
    }
    const want = Math.min(+countInput.value || 25, filtered.length);
    if(want < 1){
      alert('Choose at least one card in the session size.');
      return;
    }
    pool = filtered.slice(0, want);
    current = 0;
    setupEl.classList.add('hidden');
    areaEl.classList.remove('hidden');
    renderCard();
  });

  endBtn.addEventListener('click', () => {
    areaEl.classList.add('hidden');
    setupEl.classList.remove('hidden');
    closeStudyPanel();
    pool = [];
  });

  prevBtn.addEventListener('click', () => {
    if(current > 0){
      current--;
      renderCard();
    }
  });

  nextBtn.addEventListener('click', () => {
    if(current < pool.length - 1){
      current++;
      renderCard();
    }
  });

  fcCard.addEventListener('click', e => {
    if(e.target.closest('a, button')) return;
    toggleFlip();
  });

  fcCard.addEventListener('keydown', e => {
    if(e.key === ' ' || e.key === 'Enter'){
      e.preventDefault();
      toggleFlip();
    }
  });

  document.addEventListener('keydown', e => {
    if(areaEl.classList.contains('hidden')) return;
    if(studyPanel && studyPanel.classList.contains('study-panel--open')) return;
    const t = e.target;
    if(t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;

    if(e.key === 'ArrowLeft' && current > 0){
      e.preventDefault();
      current--;
      renderCard();
    } else if(e.key === 'ArrowRight' && current < pool.length - 1){
      e.preventDefault();
      current++;
      renderCard();
    }
  });

  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-study-panel]');
    if(!btn) return;
    e.preventDefault();
    const id = +btn.getAttribute('data-study-panel');
    const qu = resolveQuestionById(id);
    if(qu) openStudyPanel(qu);
  });
  if(studyPanelClose) studyPanelClose.addEventListener('click', closeStudyPanel);
  if(studyBackdrop) studyBackdrop.addEventListener('click', closeStudyPanel);
  document.addEventListener('keydown', e => {
    if(e.key !== 'Escape') return;
    if(studyPanel && studyPanel.classList.contains('study-panel--open')) closeStudyPanel();
  });

  const toggle = document.getElementById('theme-toggle');
  if(toggle){
    const saved = localStorage.getItem('theme');
    if(saved) document.body.className = saved;
    toggle.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('light');
      document.body.className = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', document.body.className);
    });
  }
})();
