function carregaCriacaoQuizz(){
    document.querySelector('.tela-criacao-quizz').classList.toggle('esconde-tela');
    document.querySelector('.tela-lista-quizz').classList.toggle('esconde-tela');
}
var contPergunta = 1;
function adicionaPergunta(){
    var pergunta = document.querySelector(".pergunta-quizz");
    var novaPergunta = pergunta.cloneNode(true);
    var tela = document.querySelector(".conteudo-quizz");
    contPergunta++;
    tela.appendChild(novaPergunta);
    novaPergunta.querySelector("h3").innerText = "Pergunta " + contPergunta;
}
var contNivel = 1;
function adicionaNivel(){
    var nivel = document.querySelector(".caixa-nivel");
    var novoNivel = nivel.cloneNode(true);
    var tela = document.querySelector(".nivel-quizz");
    contNivel++;
    tela.appendChild(novoNivel);
    novoNivel.querySelector("h3").innerText = "Nível " + contNivel;
}