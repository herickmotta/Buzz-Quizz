//MOCKANDO SERVIDOR
var listaQuizzes = [{
	"title": "Título do meu quizz",
	"data": {
		"perguntas": [{
			"titulo": "Pergunta 1?",
			"respostas": ["1", "2", "3", "4"]
		}]
	}
},{
	"title": "Título do meu quizz",
	"data": {
		"perguntas": [{
			"titulo": "Pergunta 1?",
			"respostas": ["1", "2", "3", "4"]
		}]
	}
},{
	"title": "Título do meu quizz",
	"data": {
		"perguntas": [{
			"titulo": "Pergunta 1?",
			"respostas": ["1", "2", "3", "4"]
		}]
	}
}];

function carregaListaQuizz(){
    renderizaListaQuizzes();
    document.querySelector('.tela-login').classList.toggle('esconde-tela');
    document.querySelector('.tela-lista-quizz').classList.toggle('esconde-tela');
}

function renderizaListaQuizzes(){
    var ul = document.querySelector('.lista-quizzes');
    ul.innerHTML = "";
    var novoQuizz = "<article class='quizz novo-quizz'>";
    novoQuizz += "Novo<br>Quizz<span>";
    novoQuizz +="<ion-icon name='add-circle'></ion-icon></span></article>";
    for(i = -1; i<listaQuizzes.length;i++){
        var li = document.createElement('li');
        if(i===-1){
            li.innerHTML = novoQuizz;
        } else {
            var quizz = "<article class = 'quizz'>";
            quizz += listaQuizzes[i].title;
            quizz += "</article>";
            li.innerHTML = quizz;
        }
        ul.appendChild(li);
    }
}