(function(){
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('study-content');
  if(!sidebar||!content) return;

  sidebar.innerHTML = STUDY_DATA.map(s =>
    `<a href="#${s.id}" data-section="${s.id}" class="sidebar-jump">${s.title}</a>`
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
          <button type="button" class="expand-all" data-section="${s.id}">Expand All</button>
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

  const links = sidebar.querySelectorAll('a.sidebar-jump');
  let skipSpyUntil = 0;

  function setActiveSidebar(id){
    links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.section;
      const el = document.getElementById(id);
      if(!el) return;
      skipSpyUntil = Date.now() + 1200;
      setActiveSidebar(id);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });

  /* Scroll-spy: pick the section whose top is just below the header (stable vs. multi-intersect) */
  const headerOffset = () => {
    const h = document.querySelector('header');
    return h ? h.getBoundingClientRect().height + 12 : 80;
  };

  function updateSpyFromScroll(){
    if(Date.now() < skipSpyUntil) return;
    const blocks = [...document.querySelectorAll('.section-block')];
    if(!blocks.length) return;
    const line = headerOffset();
    let active = blocks[0];
    for(const b of blocks){
      const top = b.getBoundingClientRect().top;
      if(top <= line + 8) active = b;
      else break;
    }
    setActiveSidebar(active.id);
  }

  let scrollTick = null;
  window.addEventListener('scroll', () => {
    if(scrollTick) return;
    scrollTick = requestAnimationFrame(() => {
      scrollTick = null;
      updateSpyFromScroll();
    });
  }, { passive: true });

  window.addEventListener('load', () => {
    if(location.hash){
      const id = decodeURIComponent(location.hash.slice(1));
      const el = document.getElementById(id);
      if(el){
        skipSpyUntil = Date.now() + 1200;
        setActiveSidebar(id);
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          updateSpyFromScroll();
        });
      }
    } else {
      updateSpyFromScroll();
    }
  });

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
