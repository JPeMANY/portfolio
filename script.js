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