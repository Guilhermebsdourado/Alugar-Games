function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let resposta = confirm ('Você tem certeza que quer devolver?');

        if (resposta) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        } else {
        alert('Você canselou a devolução');
        }  
    } else {  
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
    contarJogosAlugados();
}



