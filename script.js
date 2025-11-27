// Espera o documento HTML ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    /* --- LÓGICA DO MODAL --- */

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = document.querySelector('.close-btn');
    const modalButtons = document.querySelectorAll('.btn-modal');

    // Adiciona um evento de clique para CADA botão "Saiba Mais"
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Pega o "card" pai do botão que foi clicado
            const card = button.closest('.card');

            // 2. Pega as informações de dentro desse card
            const title = card.querySelector('h3').innerText;
            const imgSrc = card.querySelector('img').src;
            const fullDesc = card.querySelector('.tipo-descricao-completa').innerHTML;

            // 3. Coloca essas informações dentro do modal
            modalTitle.innerText = title;
            modalImg.src = imgSrc;
            modalDesc.innerHTML = fullDesc;

            // 4. Mostra o modal (adicionando a classe 'show')
            modal.classList.add('show');
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('show');
    };

    // Adiciona evento de clique no botão "X" para fechar
    closeBtn.addEventListener('click', closeModal);

    // Adiciona evento de clique no FUNDO (overlay) para fechar
    modal.addEventListener('click', (event) => {
        // Fecha o modal apenas se o clique foi no fundo (overlay)
        // e não no conteúdo (modal-content)
        if (event.target === modal) {
            closeModal();
        }
    });

    /* --- LÓGICA DO FORMULÁRIO --- */

    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', (event) => {
        // 1. Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault();

        // 2. Pega os valores dos campos
        const email = form.querySelector('#email').value;
        const telefone = form.querySelector('#telefone').value;
        const mensagem = form.querySelector('#mensagem').value;

        // 3. Validação simples
        if (email === '' || telefone === '' || mensagem === '') {
            // Mostra mensagem de erro
            formStatus.innerText = 'Por favor, preencha todos os campos!';
            formStatus.className = 'status-error'; // Adiciona classe CSS de erro
        } else {
            // Mostra mensagem de sucesso
            formStatus.innerText = 'Mensagem enviada com sucesso!';
            formStatus.className = 'status-success'; // Adiciona classe CSS de sucesso

            // Limpa o formulário
            form.reset();

            // (Opcional) Remove a mensagem de sucesso após 3 segundos
            setTimeout(() => {
                formStatus.innerText = '';
                formStatus.className = '';
            }, 3000);
        }
    });
});
