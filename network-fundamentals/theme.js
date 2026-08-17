(function() {
  var savedTheme = localStorage.getItem('nf_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  function initToggle() {
    var navInner = document.querySelector('.nav-inner');
    if (navInner && !document.querySelector('.theme-toggle-btn')) {
      var btn = document.createElement('button');
      btn.className = 'theme-toggle-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Toggle theme mode');
      
      function updateBtn(theme) {
        if (theme === 'dark') {
          btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg><span>Light</span>';
        } else {
          btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg><span>Dark</span>';
        }
      }

      updateBtn(savedTheme);

      btn.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme') || 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('nf_theme', next);
        updateBtn(next);
      });

      navInner.appendChild(btn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
