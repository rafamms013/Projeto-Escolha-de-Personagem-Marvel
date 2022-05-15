/* 
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

-> colocar a classe selecionado no personagem que passamos o mouse em cima
para adicionar a animação nele

-> retirar a classe selecionado do persoonagem que está selecionado

OBJETIVO 2 - quando passar o mouse em cima do personagem DA LISTAGEM, trocar a imagem e nome do personagem grande

-> alterar a imagem do jogador 1

-> alterar o nome do jogador 1
*/

/*OBJETIVO 1*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;
            
        




        /*OBJETIVO 1*/
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        /*OBJETIVO2*/

       
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/img/${idSelecionado}.png`;
        
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        //nomeJogador1.innerHTML = 'batata'

        const nomeSelecionado = personagem.getAttribute('data-name');
        
        nomeJogador1.innerHTML = nomeSelecionado;
    });
 });

 




