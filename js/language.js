/* ============================================
   LANGUAGE.JS — Troca de idioma (PT/EN/ES)
   ============================================
   Lê atributos data-pt, data-en, data-es em
   todos os elementos e troca o textContent.
   Idioma salvo em localStorage.
   ============================================ */

function setLanguage(lang) {
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = el.dataset[lang] || el.dataset.pt;
    });
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
}

document.querySelectorAll('#language-switcher img').forEach(flag => {
    flag.addEventListener('click', () => setLanguage(flag.dataset.lang));
});

// Aplicar idioma salvo ao carregar
setLanguage(localStorage.getItem('lang') || 'pt');
