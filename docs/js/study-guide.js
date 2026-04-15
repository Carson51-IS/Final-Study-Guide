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
  /** While set, scroll-spy must not override (sidebar click or hash load). */
  let navLockedSectionId = null;
  let navLockTimer = null;

  function setActiveSidebar(id){
    links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
  }

  function releaseNavLock(){
    navLockedSectionId = null;
    if(navLockTimer){ clearTimeout(navLockTimer); navLockTimer = null; }
    updateSpyFromScroll();
  }

  function lockNavToSection(id, scrollSmooth){
    navLockedSectionId = id;
    if(navLockTimer) clearTimeout(navLockTimer);
    navLockTimer = setTimeout(releaseNavLock, scrollSmooth ? 2800 : 500);
    setActiveSidebar(id);
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = link.dataset.section;
      const el = document.getElementById(id);
      if(!el) return;
      lockNavToSection(id, true);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });

  const headerOffset = () => {
    const h = document.querySelector('header');
    return h ? h.getBoundingClientRect().height + 12 : 80;
  };

  /**
   * Last section in document order whose top edge is at or above the reading line.
   * Do NOT break early: a tight threshold + "break" skipped Privacy when its top was ~90px.
   */
  function updateSpyFromScroll(){
    if(navLockedSectionId){
      setActiveSidebar(navLockedSectionId);
      return;
    }
    const blocks = [...document.querySelectorAll('.section-block')];
    if(!blocks.length) return;
    const line = headerOffset();
    const slack = 48;
    let active = blocks[0];
    for(const b of blocks){
      const top = b.getBoundingClientRect().top;
      if(top <= line + slack) active = b;
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
        lockNavToSection(id, false);
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
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
