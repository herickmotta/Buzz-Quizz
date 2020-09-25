//MOCKANDO SERVIDOR
var listaQuizzes = [];

function carregaListaQuizz(){
	buscaQuizzes();
	document.querySelector('.tela-login').classList.add('esconde-tela');
	document.querySelector('.tela-criacao-quizz').classList.add('esconde-tela');
    document.querySelector('.tela-lista-quizz').classList.remove('esconde-tela');
    document.querySelector('.tela-interface-final').classList.add('esconde-tela');
}

function buscaQuizzes(){
	var headers = {
		'User-Token': token,
	};
	var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes',{headers});
	requisicao.then(sucessoAoBuscar).catch(erroAoBuscar);	

}

function sucessoAoBuscar(objeto){
	listaQuizzes = objeto.data;
	renderizaListaQuizzes();
}

function erroAoBuscar(erro){
	console.log(erro);

}

function renderizaListaQuizzes(){
    var ul = document.querySelector('.lista-quizzes');
    ul.innerHTML = "";
    var novoQuizz = "<article class='quizz novo-quizz' onclick='carregaCriacaoQuizz()'>";
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
			li.setAttribute('id',listaQuizzes[i].id);
			li.setAttribute('onclick','carregaInterfaceQuizz(this)');
		}
        ul.appendChild(li);
    }
}