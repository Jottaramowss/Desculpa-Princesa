function celebrar() {
    const btn = document.getElementById('btn-aceitar');
    const msg = document.getElementById('success-message');
    const intro = document.querySelector('.intro');
    const msgBox = document.querySelector('.message-box');
    const quest = document.querySelector('.question');

    // Esconde os elementos de desculpa
    btn.style.display = 'none';
    intro.style.display = 'none';
    msgBox.style.display = 'none';
    quest.style.display = 'none';

    // Mostra a mensagem de perdão
    msg.classList.remove('hidden');

    // Cria a chuva de corações
    for (let i = 0; i < 50; i++) {
        criarCoracao();
    }
}

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Posição inicial aleatória
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    
    // Tamanho e velocidade aleatórios
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.body.appendChild(heart);

    // Remove o coração depois que a animação acaba
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}