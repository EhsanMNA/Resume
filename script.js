const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  function activate(name) {
    tabs.forEach(t => t.setAttribute('aria-selected', String(t.dataset.panel === name)));
    panels.forEach(p => p.classList.toggle('active', p.id === name));
  }
  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.panel)));
