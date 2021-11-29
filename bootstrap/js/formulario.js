$('#validacao').submit(function(){
var email = $('#email');

if (email.val() ==''){
    alert('Preencha o email!');

    return false;
}
var assunto =$('#assunto');

if (assunto.val() ==''){
    alert('Preencha o Assunto!');

    return false;
}

    return true;
   
});