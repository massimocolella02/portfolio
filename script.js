
  // Effetto terminale: digita alcune righe di comando una volta sola al caricamento
  const lines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: '[Il Tuo Nome]' },
    { type: 'cmd', text: 'cat ruolo.txt' },
    { type: 'out', text: 'Penetration Tester in formazione — ex Web Developer (Magento 2)' },
    { type: 'cmd', text: 'ls certificazioni/' },
    { type: 'out', text: 'eJPT.cert   VirtualHackingLabs.cert   OSCP.pending' },
    { type: 'cmd', text: '_' }
  ];

  const term = document.getElementById('term');
  let li = 0, ci = 0;

  function typeNext(){
    if (li >= lines.length){ return; }
    const line = lines[li];

    if (ci === 0){
      const div = document.createElement('div');
      div.className = 'term-line';
      if (line.type === 'cmd'){
        div.innerHTML = '<span class="term-prompt">$ </span><span class="typed"></span>';
      } else {
        div.innerHTML = '<span class="term-out"><span class="typed"></span></span>';
      }
      term.appendChild(div);
    }

    const typedEl = term.lastChild.querySelector('.typed');
    if (ci < line.text.length){
      typedEl.textContent += line.text[ci];
      ci++;
      setTimeout(typeNext, line.type === 'cmd' ? 38 : 14);
    } else {
      li++; ci = 0;
      setTimeout(typeNext, line.type === 'cmd' ? 220 : 380);
    }
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    lines.forEach(l => {
      const div = document.createElement('div');
      div.className = 'term-line';
      div.innerHTML = l.type === 'cmd'
        ? '<span class="term-prompt">$ </span>' + l.text
        : '<span class="term-out">' + l.text + '</span>';
      term.appendChild(div);
    });
  } else {
    typeNext();
  }

  // Micro-interazione: la card segue leggermente il cursore per il bagliore radiale
  document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  // ---------- writeup: filtro per categoria + "mostra altre" ----------
  
  /*
  
  const PAGE_SIZE = 6;
  const grid = document.getElementById('projGrid');
  const cards = Array.from(grid.querySelectorAll('.proj-card'));
  const chips = document.querySelectorAll('.filter-chip');
  const countEl = document.getElementById('projCount');
  const moreBtn = document.getElementById('showMoreBtn');

  let activeFilter = 'all';
  let visibleCount = PAGE_SIZE;

  function matches(card){
    return activeFilter === 'all' || card.dataset.cat === activeFilter;
  }

  function render(){
    const matching = cards.filter(matches);
    matching.forEach((card, i) => {
      card.style.display = '';
      // piccolo scaglionamento solo per le card che entrano ora in vista
      card.style.transitionDelay = (i < visibleCount ? Math.min(i, 8) * 0.04 : 0) + 's';
      requestAnimationFrame(() => card.classList.toggle('in', i < visibleCount));
      card.classList.toggle('is-hidden', i >= visibleCount);
    });
    cards.filter(c => !matches(c)).forEach(card => {
      card.classList.remove('in');
      card.style.display = 'none';
    });

    const shown = Math.min(visibleCount, matching.length);
    countEl.textContent = matching.length
      ? shown + ' di ' + matching.length + ' mostrate'
      : 'nessuna writeup in questa categoria';

    if (visibleCount < matching.length){
      moreBtn.hidden = false;
      moreBtn.textContent = 'Mostra altre (' + (matching.length - visibleCount) + ')';
    } else {
      moreBtn.hidden = true;
    }
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      visibleCount = PAGE_SIZE;
      render();
    });
  });

  moreBtn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    render();
  });

  render();
  
  */

  // ---------- reveal allo scroll ----------
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.reveal');
  const timelineEl = document.querySelector('.timeline');

  if (reduceMotion){
    revealTargets.forEach(el => el.classList.add('in-view'));
    if (timelineEl) timelineEl.classList.add('in-view');
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => io.observe(el));
    if (timelineEl) io.observe(timelineEl);
  }
  // ---------- effetto "decodifica" sulla frase in evidenza ----------
  const accentWord = document.querySelector('h1 .accent');
  if (accentWord){
    const original = accentWord.textContent;
    const glyphs = '!<>-_\\/[]{}—=+*^?#01';

    function decode(el, text, speed){
      let iteration = 0;
      const totalSteps = text.length * 3;
      clearInterval(el._decodeTimer);
      if (reduceMotion){ el.textContent = text; return; }
      el._decodeTimer = setInterval(() => {
        el.textContent = text.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < iteration / 3) return text[i];
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join('');
        iteration++;
        if (iteration > totalSteps){
          clearInterval(el._decodeTimer);
          el.textContent = text;
        }
      }, speed);
    }

    decode(accentWord, original, 28);

    if (!reduceMotion){
      const scheduleDecode = () => {
        const delay = 7000 + Math.random() * 6000; // ogni 7-13s circa
        setTimeout(() => { decode(accentWord, original, 28); scheduleDecode(); }, delay);
      };
      scheduleDecode();
    }
  }

  // ---------- barra di avanzamento scroll ----------
  const scrollBar = document.getElementById('scrollBar');
  function updateScrollBar(){
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    scrollBar.style.width = (max > 0 ? (scrolled / max) * 100 : 0) + '%';
  }
  document.addEventListener('scroll', updateScrollBar, { passive: true });
  updateScrollBar();