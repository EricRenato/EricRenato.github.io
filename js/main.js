/* ============================================
   MAIN.JS — Ponto de entrada
   ============================================
   Responsabilidades:
   - Inicializa todos os módulos
   - Controla navegação entre seções (SPA)
   - Gerencia histórico de navegação (botão Voltar)
   - Ativa Recruiter Mode via URL ?mode=recruiter
   - Carrega conteúdo de data/*.json
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Detectar Recruiter Mode
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'recruiter') {
        document.getElementById('recruiter-banner').classList.remove('hidden');
    }

    // 2. Carregar projetos
    // fetch('data/projects.json').then(...)

    // 3. Carregar livros, citações, etc.

    // 4. Inicializar navegação por dock
    // TODO

    // 5. Histórico de navegação
    // TODO
});
