(function(){

  /* ── TOPIC MAP ── */
  const TOPICS = [
    {key:'fraud',label:'Fraud',badge:'fraud'},
    {key:'incident-response',label:'Incident Response',badge:'ir'},
    {key:'privacy',label:'Privacy',badge:'privacy'},
    {key:'sony',label:'Sony Pictures',badge:'sony'},
    {key:'crypto',label:'Cryptography',badge:'crypto'},
    {key:'auth',label:'Authentication',badge:'auth'},
    {key:'hbgary',label:'HBGary Federal',badge:'hbgary'}
  ];

  /* ── DOM refs ── */
  const setupEl    = document.getElementById('quiz-setup');
  const areaEl     = document.getElementById('quiz-area');
  const resultsEl  = document.getElementById('results-area');
  const topicBox   = document.getElementById('topic-checks');
  const countInput = document.getElementById('q-count');
  const maxLabel   = document.getElementById('max-label');
  const startBtn   = document.getElementById('start-btn');
  const prevBtn    = document.getElementById('prev-btn');
  const nextBtn    = document.getElementById('next-btn');
  const progBar    = document.getElementById('progress-bar');
  const qContainer = document.getElementById('question-container');
  const studyBackdrop = document.getElementById('study-panel-backdrop');
  const studyPanel = document.getElementById('study-panel');
  const studyPanelBody = document.getElementById('study-panel-body');
  const studyPanelHeading = document.getElementById('study-panel-heading');
  const studyPanelClose = document.getElementById('study-panel-close');

  function escapeHtml(s){
    return String(s)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
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
    const title = section ? section.title : (TOPICS.find(t=>t.key===q.topic)?.label || q.topic);

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
    studyBackdrop.setAttribute('aria-hidden','false');
    studyPanel.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeStudyPanel(){
    if(!studyPanel) return;
    studyBackdrop.classList.remove('study-panel--open');
    studyPanel.classList.remove('study-panel--open');
    studyBackdrop.setAttribute('aria-hidden','true');
    studyPanel.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  /* ── STATE ── */
  let pool = [];
  let current = 0;
  let answers = {};   // id -> chosen index (or array for multi)
  let revealed = {};  // id -> true once answered

  /* ── SETUP: topic checkboxes ── */
  const allLabel = document.createElement('label');
  allLabel.innerHTML = `<input type="checkbox" id="cb-all" checked><span>All Topics</span>`;
  topicBox.appendChild(allLabel);

  TOPICS.forEach(t => {
    const lbl = document.createElement('label');
    lbl.innerHTML = `<input type="checkbox" class="topic-cb" value="${t.key}" checked><span>${t.label}</span>`;
    topicBox.appendChild(lbl);
  });

  const allCb = document.getElementById('cb-all');
  const topicCbs = document.querySelectorAll('.topic-cb');

  allCb.addEventListener('change', () => {
    topicCbs.forEach(cb => cb.checked = allCb.checked);
    updateMax();
  });
  topicCbs.forEach(cb => cb.addEventListener('change', () => {
    allCb.checked = [...topicCbs].every(c => c.checked);
    updateMax();
  }));

  function getSelectedTopics(){
    return [...topicCbs].filter(c=>c.checked).map(c=>c.value);
  }

  function updateMax(){
    const topics = getSelectedTopics();
    const count = QUIZ_DATA.filter(q=>topics.includes(q.topic)).length;
    maxLabel.textContent = `/ ${count} available`;
    if(+countInput.value > count) countInput.value = count;
    countInput.max = count;
  }
  updateMax();
  countInput.addEventListener('input', updateMax);

  /* ── START QUIZ ── */
  startBtn.addEventListener('click', () => {
    const topics = getSelectedTopics();
    if(!topics.length){ alert('Select at least one topic.'); return; }
    let filtered = QUIZ_DATA.filter(q=>topics.includes(q.topic));
    shuffle(filtered);
    const want = Math.min(+countInput.value || 20, filtered.length);
    pool = filtered.slice(0, want);
    current = 0;
    answers = {};
    revealed = {};
    setupEl.classList.add('hidden');
    resultsEl.classList.add('hidden');
    areaEl.classList.remove('hidden');
    render();
  });

  /* ── NAVIGATION ── */
  prevBtn.addEventListener('click', () => { if(current>0){current--;render();} });
  nextBtn.addEventListener('click', () => {
    if(current < pool.length-1){ current++; render(); }
    else { showResults(); }
  });

  /* ── RENDER QUESTION ── */
  function render(){
    const q = pool[current];
    const pct = ((current+1)/pool.length*100).toFixed(0);
    progBar.style.width = pct+'%';
    prevBtn.style.visibility = current===0 ? 'hidden' : 'visible';
    nextBtn.textContent = current===pool.length-1 ? 'Finish' : 'Next →';

    const isMulti = q.type === 'multi';
    const isRevealed = !!revealed[q.id];
    const userAnswer = answers[q.id];

    let choicesHTML = q.choices.map((ch, i) => {
      let cls = 'choice-btn';
      if(isRevealed) cls += ' disabled';
      if(isMulti){
        const selected = Array.isArray(userAnswer) && userAnswer.includes(i);
        if(selected) cls += ' selected';
        if(isRevealed){
          const correctArr = q.correct;
          if(correctArr.includes(i)) cls += ' correct';
          else if(selected) cls += ' incorrect';
        }
      } else {
        if(userAnswer === i) cls += ' selected';
        if(isRevealed){
          if(i === q.correct) cls += ' correct';
          else if(userAnswer === i) cls += ' incorrect';
        }
      }
      return `<button class="${cls}" data-idx="${i}">${ch}</button>`;
    }).join('');

    let expHTML = '';
    if(isRevealed){
      const isCorrectAnswer = isMulti
        ? arraysEqual(userAnswer||[], q.correct)
        : userAnswer === q.correct;
      if(!isCorrectAnswer){
        expHTML = `
        <div class="explanation-box">
          <div class="exp-label">✗ Incorrect</div>
          <p>${escapeHtml(q.explanation)}</p>
          ${studyActionsRow(q)}
        </div>`;
      } else {
        expHTML = `
        <div class="explanation-box" style="border-left-color:var(--green)">
          <div class="exp-label" style="color:var(--green)">✓ Correct!</div>
          <p>${escapeHtml(q.explanation)}</p>
          ${studyActionsRow(q)}
        </div>`;
      }
    }

    const topicObj = TOPICS.find(t=>t.key===q.topic);
    const topicLabel = topicObj?.label || q.topic;
    const badgeCls = topicObj?.badge || q.topic;

    qContainer.innerHTML = `
      <div class="question-card">
        <div class="q-number">
          <span>Question ${current+1} of ${pool.length}</span>
          <span class="topic-badge ${badgeCls}">${topicLabel}</span>
        </div>
        <div class="q-text">${q.question}</div>
        ${isMulti && !isRevealed ? '<p style="font-size:.75rem;color:var(--text-muted);margin-bottom:.6rem;">(Select all that apply)</p>':''}
        <div class="choices">${choicesHTML}</div>
        ${isMulti && !isRevealed ? '<button class="btn btn-primary" id="submit-multi" style="margin-top:.8rem">Submit</button>':''}
        ${expHTML}
      </div>`;

    /* ── choice click handlers ── */
    qContainer.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if(isRevealed) return;
        const idx = +btn.dataset.idx;
        if(isMulti){
          let arr = answers[q.id] || [];
          if(arr.includes(idx)) arr = arr.filter(x=>x!==idx);
          else arr.push(idx);
          answers[q.id] = arr;
          render();
        } else {
          answers[q.id] = idx;
          revealed[q.id] = true;
          render();
        }
      });
    });

    const submitMulti = document.getElementById('submit-multi');
    if(submitMulti){
      submitMulti.addEventListener('click', () => {
        if(!answers[q.id] || !answers[q.id].length){ alert('Select at least one answer.'); return; }
        revealed[q.id] = true;
        render();
      });
    }
  }

  /* ── RESULTS ── */
  function showResults(){
    areaEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');

    let correctCount = 0;
    const missed = [];
    const topicStats = {};
    TOPICS.forEach(t => topicStats[t.key] = {right:0, total:0});

    pool.forEach(q => {
      const ua = answers[q.id];
      const isRight = q.type === 'multi'
        ? arraysEqual(ua||[], q.correct)
        : ua === q.correct;
      if(topicStats[q.topic]) topicStats[q.topic].total++;
      if(isRight){
        correctCount++;
        if(topicStats[q.topic]) topicStats[q.topic].right++;
      } else {
        missed.push(q);
      }
    });

    const pct = (correctCount/pool.length*100).toFixed(0);

    let breakdownHTML = TOPICS.filter(t=>topicStats[t.key].total>0).map(t => {
      const s = topicStats[t.key];
      return `<div class="rb-item"><span class="topic-badge ${t.badge}">${t.label}</span> ${s.right}/${s.total}</div>`;
    }).join('');

    let missedHTML = '';
    if(missed.length){
      missedHTML = `<div class="missed-list"><h3>Missed Questions (${missed.length})</h3>` +
        missed.map(q => {
          const correctLabel = q.type==='multi'
            ? q.correct.map(i=>q.choices[i]).join(', ')
            : q.choices[q.correct];
          return `<div class="question-card" style="margin-bottom:.8rem;text-align:left;">
            <div class="q-text" style="font-size:.88rem">${q.question}</div>
            <p style="font-size:.82rem;color:var(--green);margin:.3rem 0"><strong>Correct:</strong> ${correctLabel}</p>
            <div class="explanation-box">
              <p>${escapeHtml(q.explanation)}</p>
              ${studyActionsRow(q)}
            </div>
          </div>`;
        }).join('') + '</div>';
    }

    resultsEl.innerHTML = `
      <div class="results-card">
        <div class="score">${pct}%</div>
        <div class="score-label">${correctCount} / ${pool.length} correct</div>
        <div class="results-breakdown">${breakdownHTML}</div>
        <button class="btn btn-primary" id="retake-btn">Retake Quiz</button>
        <button class="btn btn-secondary" id="new-btn" style="margin-left:.5rem">New Quiz</button>
      </div>
      ${missedHTML}`;

    document.getElementById('retake-btn').addEventListener('click', () => {
      current = 0; answers = {}; revealed = {};
      resultsEl.classList.add('hidden');
      areaEl.classList.remove('hidden');
      render();
    });
    document.getElementById('new-btn').addEventListener('click', () => {
      resultsEl.classList.add('hidden');
      setupEl.classList.remove('hidden');
    });
  }

  /* ── HELPERS ── */
  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }
  function arraysEqual(a,b){
    if(a.length!==b.length) return false;
    const sa=[...a].sort(), sb=[...b].sort();
    return sa.every((v,i)=>v===sb[i]);
  }

  /* ── THEME TOGGLE ── */
  const toggle = document.getElementById('theme-toggle');
  if(toggle){
    const saved = localStorage.getItem('theme');
    if(saved) document.body.className = saved;
    toggle.addEventListener('click',()=>{
      const isDark = !document.body.classList.contains('light');
      document.body.className = isDark ? 'light' : 'dark';
      localStorage.setItem('theme', document.body.className);
    });
  }

  /* ── Study side panel (delegated — works after dynamic results HTML) ── */
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

})();
