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
    limpaFormulario(novaPergunta);
    tela.appendChild(novaPergunta);
    novaPergunta.querySelector("h3").innerText = "Pergunta " + contPergunta;
}
var contNivel = 1;
function adicionaNivel(){
    var nivel = document.querySelector(".caixa-nivel");
    var novoNivel = nivel.cloneNode(true);
    var tela = document.querySelector(".nivel-quizz");
    contNivel++;
    limpaFormulario(novoNivel);
    tela.appendChild(novoNivel);
    novoNivel.querySelector("h3").innerText = "Nível " + contNivel;
}

function publicarQuizz(){
    var titleInput = document.querySelector('.conteudo-quizz .titulo-quizz');
    var title = primeiraLetra(titleInput.value.trim());
    console.log(title);

    var perguntas = buscaPerguntas();
    var niveis = buscaNiveis();
    
    var dados{
        'title': title,
        'perguntas': perguntas,
        'niveis': niveis

    }

}

function buscaNiveis(){
    var listaNiveis = document.querySelectorAll(".caixa-nivel");
    var niveis = [];
    for(var i = 0 ;i < listaNiveis.length;i++){
        var minimoInput = listaNiveis[i].querySelector('.acerto-minimo');
        var maximoInput = listaNiveis[i].querySelector('.acerto-maximo');
        var tituloInput = listaNiveis[i].querySelector('.titulo-nivel');
        var imagemInput = listaNiveis[i].querySelector('.imagem-nivel');
        var descricaoInput = listaNiveis[i].querySelector('.descricao-nivel');

        var minimo = minimoInput.value.trim();
        var maximo = maximoInput.value.trim();
        var titulo = tituloInput.value.trim();
        var imagem = imagemInput.value.trim();
        var descricao = descricaoInput.value.trim();

        nivel = {
            'minimo': minimo,
            'maximo': maximo,
            'titulo': titulo,
            'imagem': imagem,
            'descricao': descricao
        };
        niveis.push(nivel);
    }
    return niveis;
}

function buscaPerguntas(){
    var listaPerguntas = document.querySelectorAll(".pergunta-quizz");
    var perguntas = [];
    for(var i = 0 ;i < listaPerguntas.length;i++){
        var respostas = [];
        var tituloInput = listaPerguntas[i].querySelector('.pergunta');
        var titulo = primeiraLetra(tituloInput.value.trim());
        if(validaInterrogacao(titulo)){
            alert("Corrija os dados!");
            return;
        }
        var respostasInput = listaPerguntas[i].querySelectorAll('.resposta');
        var respostasImgInput = listaPerguntas[i].querySelectorAll('.resposta-imagem');
        for(var j = 0; j < respostasInput.length;j++){
            var resposta = {
                'texto': primeiraLetra(respostasInput[j].value.trim()),
                'imagem': respostasImgInput[j].value.trim()
            };
            respostas.push(resposta);
        }
        var pergunta = {
            'titulo': titulo,
            'respostas': respostas
        };
        perguntas.push(pergunta);
    }
    return perguntas;
}

function limpaFormulario(elemento){
    var formulario = elemento.querySelectorAll('input');
    for(var i = 0;i<formulario.length;i++){
        formulario[i].value = '';
    }
}

function primeiraLetra(string){
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}

function validaInterrogacao(string){
    index = string.indexOf("?",0);
    indexFinal = string.lastIndexOf("?");
    if(index === indexFinal && indexFinal === string.length-1) return false;
    else return true;
}

