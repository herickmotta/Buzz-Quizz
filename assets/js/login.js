var token;
ativaEnter();
function tentarLogin(){
    var emailInput = document.querySelector('#email');
    var senhaInput = document.querySelector('#senha');
    var email = emailInput.value;
    var senha = senhaInput.value;

    if(senha === undefined || email === undefined ){
        alert("Preencha todos os campos!");
        return;
    }
    desativaLogin();
    enviaRequisicao(email,senha);
}

function enviaRequisicao(email,senha){
    var dados = {
        "email": email,
        "password": senha
    };
    var requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/users', dados);

    requisicao.then(processarSucesso).catch(processarErro);
    
}

function processarSucesso(sucesso){
   console.log(sucesso);
   token = sucesso.data.token;
   carregaListaQuizz();
}

function processarErro(erro){
    alert(erro.response.data.message);
    ativaLogin();
}

function desativaLogin(){
    var botao = document.querySelector('.entrar-login');
    botao.setAttribute('onclick','');
}
function ativaLogin(){
    var botao = document.querySelector('.entrar-login');
    botao.setAttribute('onclick','tentarLogin()'); 
}

function ativaEnter(){
    document.querySelector("#senha").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector('.entrar-login').click();
        }
    
    });
    document.querySelector("#email").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.querySelector('.entrar-login').click();
        }
    
    });
}