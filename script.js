// 3 BARRAS

const barras = document.querySelector('header .barraMobile');
const menuOpcoes = document.querySelector('header .opcoes');

barras.addEventListener('click', () => {
    menuOpcoes.classList.toggle('none')
})


// VISUALIZADOR IMAGENS

const visualizadorImagens = document.querySelector('.visualizadorImagens');
const btnFechar = visualizadorImagens.querySelector('.fechar');
const imagem = visualizadorImagens.querySelector('img');
const legenda = visualizadorImagens.querySelector('.legenda')

btnFechar.addEventListener('click', () => {
    visualizadorImagens.classList.add('none')
})

const dados = {
    cuba: {
        url: 'Infográfico - Cuba.png',
        legenda: 'Infográfico sobre Cuba'
    }
}

const linksAbrirImg = document.querySelectorAll('.abrirImagem');

linksAbrirImg.forEach(link => {
    link.addEventListener('click', () => {
        const id = link.id;
        const info = dados[id];
        imagem.src = 'assets/images/hd/' + info.url;
        legenda.textContent = info.legenda;
        console.log(info.url)
        console.log(info.legenda)

        visualizadorImagens.classList.remove('none');
    })
})

// document.addEventListener("mousemove", (event) => {
//     const cursor = document.querySelector(".custom-cursor");
//     cursor.style.left = `${event.clientX}px`;
//     cursor.style.top = `${event.clientY}px`;
// });
// SEGUIR O MOUSE




// Animação botões
const botoes = document.querySelectorAll('.botao');

// botoes.forEach(botao => {
//     botao.addEventListener('click', () => {
//         const imagens = document.querySelectorAll('img');
//         imagens.forEach(img => img.classList.toggle('oculto'));
//     })
// })

botoes.forEach(botao => {
    botao.addEventListener('mouseenter', mudarImagem);
    botao.addEventListener('mouseleave', mudarImagem);
})

function mudarImagem(event) {
    const imagens = event.currentTarget.querySelectorAll('img');
    imagens.forEach(img => img.classList.toggle('oculto'));

    const txt = event.currentTarget.querySelector('span');
    txt.classList.toggle('margemSpan');
}