/* ============================================
   THEME-TOGGLE.JS — Dark/Light mode
   ============================================
   - Manual: clique no botão #theme-toggle
   - Automático: 06h-18h claro, 18h-06h escuro
   - Preferência manual sobrepõe automático
     (salva em localStorage)
   ============================================ */

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

function getAutoTheme() {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 18) ? 'light' : 'dark';
}

// Aplicar preferência salva, ou automático
const saved = localStorage.getItem('theme');
applyTheme(saved || getAutoTheme());

document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
});
