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
          <p>${q.explanation}</p>
          <div class="exp-ref">📖 ${q.sourceRef} — <a href="index.html#${q.topic}" target="_blank" style="color:var(--accent)">View in Study Guide</a></div>
        </div>`;
      } else {
        expHTML = `
        <div class="explanation-box" style="border-left-color:var(--green)">
          <div class="exp-label" style="color:var(--green)">✓ Correct!</div>
          <p>${q.explanation}</p>
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
              <p>${q.explanation}</p>
              <div class="exp-ref">📖 ${q.sourceRef} — <a href="index.html#${q.topic}" target="_blank" style="color:var(--accent)">View in Study Guide</a></div>
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

})();
