/* ============================================
   MODAL.JS — Modal de solicitação de acesso
   ============================================
   Captura: nome, email, empresa,
   interesse em conversa, horário preferido.
   Envia para... (TODO: definir destino — email,
   Google Forms, Formspree, backend próprio).
   ============================================ */

const modal = document.getElementById('access-modal');

function openModal()  { modal.classList.remove('hidden'); }
function closeModal() { modal.classList.add('hidden'); }

document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('modal-submit').addEventListener('click', () => {
    const data = {
        name:    document.getElementById('modal-name').value,
        email:   document.getElementById('modal-email').value,
        company: document.getElementById('modal-company').value,
        chat:    document.getElementById('modal-chat').checked,
        time:    document.getElementById('modal-time').value
    };
    console.log('Solicitação:', data);
    // TODO: enviar via fetch para endpoint
    closeModal();
});
