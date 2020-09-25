var acertos = 0;
var quizzAtual;
var tituloQuizz;
var tituloPergunta;
var listaRespostas;
var perguntaAtual = 0;

function carregaInterfaceQuizz(quizz){
    document.querySelector('.tela-interface-quizz').classList.remove('esconde-tela');
    document.querySelector('.tela-lista-quizz').classList.add('esconde-tela');
    iniciaQuizz(quizz);
}

function iniciaQuizz(quizz){
    resetaVariaveisGlobais();
    var id = quizz.getAttribute('id');
    for(var i= 0 ;listaQuizzes.length;i++){
        if(id == listaQuizzes[i].id){
            quizzAtual = listaQuizzes[i];
            break;
        }
    }
    atualizaPergunta();
}
function atualizaPergunta(){
    tituloQuizz = quizzAtual.title;
    tituloPergunta = quizzAtual.data.perguntas[perguntaAtual].titulo;
    listaRespostas = quizzAtual.data.perguntas[perguntaAtual].respostas;
    listaRespostas[0].ehCorreta = 'true';
    listaRespostas = listaRespostas.sort(comparador);
    renderizaPergunta();
}

function renderizaPergunta(){
    document.querySelector('.interface-title').innerText = tituloQuizz;
    document.querySelector('.interface-pergunta').innerText = (perguntaAtual+1) + '. ' + tituloPergunta;
    var containerPergunta = document.querySelector('.interface-respostas');
    containerPergunta.innerHTML = '';
    for(var i = 0; i<listaRespostas.length;i++){
        var li = document.createElement('li');
        var resposta;
        resposta = '<img src ='+ listaRespostas[i].imagem + '></img>';
        resposta += '<div class = "nome-imagem">' + listaRespostas[i].texto +'</div>';
        li.innerHTML = resposta;
        if (listaRespostas[i].ehCorreta === 'true'){
            li.classList.add('certa')
        };
        li.setAttribute('onclick','escolheResposta(this)');
        containerPergunta.appendChild(li);
    }
}

function comparador() { 
    return Math.random() - 0.5; 
}

function proximaPergunta(){
    perguntaAtual++;
    if(perguntaAtual === quizzAtual.data.perguntas.length){
        finalizaQuizz();
        return;
    }
    atualizaPergunta();
}

function escolheResposta(resposta){
    if(resposta.classList.contains('certa')){
        acertos++;
    }
    var respostasErradas = document.querySelectorAll('.nome-imagem');
    for(var i=0;i<respostasErradas.length;i++){
        respostasErradas[i].style.background = '#FFBBBA';
    }
    document.querySelector('.certa .nome-imagem').style.background = '#9CFFB8';
    setTimeout(proximaPergunta,2000);
}

function resetaVariaveisGlobais(){
    acertos = 0;
    quizzAtual = null;
    tituloQuizz = null;
    tituloPergunta = null;
    listaRespostas = null;
    perguntaAtual = 0;
    tituloNivel = null;
    imagemNivel = null;
    descricaoNivel = null;
    score = null;
}

function finalizaQuizz(){
    carregaTelaFinal();
}
var tituloNivel;
var imagemNivel;
var descricaoNivel;
var score ;
function carregaTelaFinal(){
    score = Math.ceil((acertos/perguntaAtual)*100);
    for(var i = 0;i<quizzAtual.data.niveis.length;i++){
        if(score >= quizzAtual.data.niveis[i].minimo && score <= quizzAtual.data.niveis[i].maximo){
            tituloNivel = quizzAtual.data.niveis[i].titulo;
            imagemNivel = quizzAtual.data.niveis[i].imagem;
            descricaoNivel = quizzAtual.data.niveis[i].descricao;
        }
    }
    renderizaNivel();
    document.querySelector('.tela-interface-quizz').classList.add('esconde-tela');
    document.querySelector('.tela-interface-final').classList.remove('esconde-tela');
}

function renderizaNivel(){
    document.querySelector('.interface-title-final').innerText = tituloQuizz;
    document.querySelector('.interface-pergunta-final').innerHTML = 'Você acertou '+acertos+' de '+perguntaAtual+' perguntas!<br> Score: '+score+'%';
    
    var descricao = '<h5>'+tituloNivel+'</h5><p>'+descricaoNivel+'</p>';
    document.querySelector('.interface-quizz-final .descricao-nivel').innerHTML = descricao;
    document.querySelector('.interface-quizz-final .imagem-nivel').innerHTML = "<img src="+ imagemNivel +">";
}
