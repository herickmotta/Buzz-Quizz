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
    var id = quizz.getAttribute('id');
    for(var i= 0 ;listaQuizzes.length;i++){
        if(id == listaQuizzes[i].id){
            quizzAtual = listaQuizzes[i];
            break;
        }
    }
    console.log(quizzAtual);
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
            li.classList.add('correta')
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
        console.log('acabou')
        return;
    }
    atualizaPergunta();
}

function escolheResposta(resposta){
    if(resposta.classList.contains('correta')){
        acertos++;
    }
    var respostasErradas = document.querySelectorAll('.nome-imagem');
    for(var i=0;i<respostasErradas.length;i++){
        respostasErradas[i].style.background = '#FFBBBA';
    }
    document.querySelector('.correta .nome-imagem').style.background = '#9CFFB8';
    setTimeout(proximaPergunta,2000);
}


