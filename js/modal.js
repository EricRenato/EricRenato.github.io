/* ============================================
   MODAL.JS — Solicitação de Acesso e Apresentação em Áudio
   ============================================ */

function requestAccess(type) {
    requestLinkedInAccess();
}

function requestLinkedInAccess() {
    const linkedinUrl = "https://www.linkedin.com/in/eric-renato/";
    window.open(linkedinUrl, '_blank');
}
