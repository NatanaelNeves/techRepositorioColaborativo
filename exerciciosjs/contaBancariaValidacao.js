let senha = 123
let tentativas = 3
let contTentativas = 1
let senhaUser = prompt('Digite a sua senha');


if (senha == senhaUser) {
    alert('Acessou a conta!');
} else {
    while (senha != senhaUser && contTentativas < 3) {
        senhaUser = prompt(`Senha incorreta. Você tem ${tentativas-contTentativas} tentativas. Digite novamente a senha.`);


        if(senha == senhaUser){
            alert('Entrou na conta')


        }
        else{
            contTentativas+=1

        }
        
    }
    alert('Limite de tentativas excedido. Acesso bloqueado.');

}
