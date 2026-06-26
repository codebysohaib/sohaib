// SCROLL TO TOP ON REFRESH
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// TERMINAL TYPEWRITER
  const lines = [
    { type: 'prompt', text: '$ node developer.js' },
    { type: 'output', text: '' },
    { type: 'code', html: '<span class="t-key">const</span> <span class="t-val">developer</span> = {' },
    { type: 'code', html: '  <span class="t-key">name</span>: <span class="t-str">"Sohaib"</span>,' },
    { type: 'code', html: '  <span class="t-key">role</span>: <span class="t-str">"Web & Android Dev"</span>,' },
    { type: 'code', html: '  <span class="t-key">skills</span>: [<span class="t-str">"React"</span>, <span class="t-str">"Tailwind"</span>, <span class="t-str">"Kotlin"</span>],' },
    { type: 'code', html: '  <span class="t-key">available</span>: <span class="t-val">true</span>,' },
    { type: 'code', html: '}' },
    { type: 'output', text: '' },
    { type: 'comment', text: '// Ready to build something great?' },
  ];

  const tb = document.getElementById('terminal-body');
  let lineIdx = 0;

  function typeNextLine() {
    if (lineIdx >= lines.length) {
      tb.innerHTML += `<div><span class="t-prompt">$</span> <span class="t-cursor"></span></div>`;
      return;
    }
    const l = lines[lineIdx++];
    const div = document.createElement('div');

    if (l.type === 'prompt') {
      div.innerHTML = `<span class="t-prompt">$ </span><span class="t-cmd">${l.text.slice(2)}</span>`;
    } else if (l.type === 'output') {
      div.innerHTML = '&nbsp;';
    } else if (l.type === 'comment') {
      div.innerHTML = `<span class="t-comment">${l.text}</span>`;
    } else if (l.type === 'code') {
      div.innerHTML = `&nbsp;&nbsp;${l.html}`;
    }
    tb.appendChild(div);
    setTimeout(typeNextLine, l.type === 'output' ? 80 : 120);
  }

  setTimeout(typeNextLine, 900);

  // INTERSECTION OBSERVER
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), entry.target.dataset.delay || 0);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .stat, .skill-card, .project-card, .contact-glow').forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });

  // SKILL CARD stagger
  document.querySelectorAll('.skill-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 80) + 'ms';
  });
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = (i * 100) + 'ms';
  });

  // PARALLAX on hero grid
  document.addEventListener('mousemove', e => {
    const grid = document.querySelector('.grid-overlay');
    if(grid) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        grid.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
  });