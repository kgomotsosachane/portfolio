(function () {
    const STORAGE_KEY = 'theme-preference';
    const toggleBtns = document.querySelectorAll('.theme-toggle');

    if (!toggleBtns.length) {
        console.warn('theme-toggle: no .theme-toggle buttons found in the DOM.');
        return;
    }

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);
        toggleBtns.forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(isLight));
        });
    }
 
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    toggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const isLight = document.body.classList.contains('light-mode');
            const next = isLight ? 'dark' : 'light';
            applyTheme(next);
            localStorage.setItem(STORAGE_KEY, next);
            
        });
    });
})();