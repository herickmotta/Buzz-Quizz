tentarLogin(){
    var email = document.querySelector('.email');
    var senha = document.querySelector('.password');

    if(senha === undefined || email === undefined ){
        alert("Preencha todos os campos!");
    }
}