(function(){
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('study-content');
  if(!sidebar||!content) return;

  sidebar.innerHTML = STUDY_DATA.map(s =>
    `<a href="#${s.id}" data-section="${s.id}">${s.title}</a>`
  ).join('');

  content.innerHTML = STUDY_DATA.map(s => {
    const cards = s.points.map((p,i) => `
      <div class="card" data-idx="${i}">
        <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
          <span class="arrow">▶</span>
          <span>${p.bullet}</span>
        </div>
        <div class="card-body">
          ${p.detail}
          <div style="margin-top:.8rem">
            ${p.sources.map(src=>`<span class="source-tag">${src}</span>`).join('')}
          </div>
        </div>
      </div>`).join('');

    return `
      <div class="section-block" id="${s.id}">
        <div class="section-title">
          <span><span class="topic-badge ${s.badge}">${s.title}</span> ${s.title}</span>
          <button class="expand-all" data-section="${s.id}">Expand All</button>
        </div>
        ${cards}
      </div>`;
  }).join('');

  document.querySelectorAll('.expand-all').forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = btn.dataset.section;
      const block = document.getElementById(sec);
      const cards = block.querySelectorAll('.card');
      const allOpen = [...cards].every(c => c.classList.contains('open'));
      cards.forEach(c => c.classList.toggle('open', !allOpen));
      btn.textContent = allOpen ? 'Expand All' : 'Collapse All';
    });
  });

  const links = sidebar.querySelectorAll('a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        links.forEach(l=>l.classList.remove('active'));
        const match = sidebar.querySelector(`a[data-section="${e.target.id}"]`);
        if(match) match.classList.add('active');
      }
    });
  },{rootMargin:'-80px 0px -60% 0px'});
  document.querySelectorAll('.section-block').forEach(b=>observer.observe(b));

  // Theme toggle
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
