// Seleciona os elementos necessários
const envelope = document.getElementById('envelope');
const envelopeFlap = document.getElementById('envelopeFlap');
const invitation = document.getElementById('invitation');
const openText = document.getElementById('openText');

// Função para abrir o envelope e exibir o convite
envelope.addEventListener('click', function() {
    // Animação para abrir o envelope (levantando a aba)
    envelopeFlap.style.transform = 'rotateX(-180deg)';
    openText.style.display = 'none'; // Oculta o texto de instrução

    // Mostrar o convite com animação após abrir o envelope
    setTimeout(function() {
        invitation.classList.add('show'); // Mostra o convite com animação
        invitation.classList.remove('hidden'); // Remove a classe que esconde o convite
    }, 1000); // Espera 1 segundo (tempo da animação da aba)
});

// Função para o botão de confirmação
document.getElementById('rsvpButton').addEventListener('click', function() {
    const message = document.getElementById('rsvpMessage');
    message.textContent = "Sua presença foi confirmada! Nos vemos em breve!";
});


