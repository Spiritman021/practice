(() => {
  const storageKey = 'os-notes-new-progress';
  const topicKey = decodeURIComponent(location.pathname.split('/').pop());
  const fields = [
    { key: 'visited', label: 'Visited' },
    { key: 'revision1', label: 'Revision 1' },
    { key: 'revision2', label: 'Revision 2' }
  ];

  const hero = document.querySelector('.hero');
  if (!hero) return;

  const style = document.createElement('style');
  style.textContent = `
    .page-progress {
      display:flex; align-items:center; justify-content:space-between; gap:18px;
      margin-top:18px; padding:14px 18px; border:1px solid var(--line);
      border-radius:14px; background:rgba(255,255,255,.92);
      box-shadow:0 8px 25px rgba(49,46,129,.07);
    }
    .page-progress-title { color:var(--dark); font-size:14px; font-weight:800; }
    .page-progress-options { display:flex; align-items:center; gap:12px; }
    .page-progress-option {
      display:flex; align-items:center; gap:6px; color:var(--muted);
      font-size:12px; font-weight:700; cursor:pointer; white-space:nowrap;
    }
    .page-progress-option input {
      width:19px; height:19px; margin:0; accent-color:var(--accent); cursor:pointer;
    }
    @media(max-width:600px) {
      .page-progress { align-items:flex-start; flex-direction:column; gap:10px; }
      .page-progress-options { width:100%; justify-content:space-between; gap:7px; }
      .page-progress-option { flex-direction:column; font-size:10px; }
    }
  `;
  document.head.appendChild(style);

  const progress = document.createElement('section');
  progress.className = 'page-progress';
  progress.setAttribute('aria-label', 'Topic progress');
  progress.innerHTML = `
    <span class="page-progress-title">Mark your progress</span>
    <span class="page-progress-options"></span>
  `;
  hero.after(progress);

  const readProgress = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (error) {
      return {};
    }
  };

  const checkboxes = {};
  const options = progress.querySelector('.page-progress-options');

  fields.forEach(({ key, label }) => {
    const option = document.createElement('label');
    option.className = 'page-progress-option';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('aria-label', label);
    checkbox.checked = Boolean(readProgress()[topicKey]?.[key]);
    checkboxes[key] = checkbox;

    checkbox.addEventListener('change', () => {
      const savedProgress = readProgress();
      savedProgress[topicKey] = savedProgress[topicKey] || {};
      savedProgress[topicKey][key] = checkbox.checked;
      try {
        localStorage.setItem(storageKey, JSON.stringify(savedProgress));
      } catch (error) {
        // Keep the control usable even if browser storage is unavailable.
      }
    });

    option.append(checkbox, document.createTextNode(label));
    options.appendChild(option);
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey) return;
    const topicProgress = readProgress()[topicKey] || {};
    fields.forEach(({ key }) => {
      checkboxes[key].checked = Boolean(topicProgress[key]);
    });
  });
})();
