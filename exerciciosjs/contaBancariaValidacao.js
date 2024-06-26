let senha = 123
let tentativas = 0;
let senhaUser = prompt('Digite a sua senha');


if (senha == senhaUser) {
    alert('Caminho Feliz :D');
} else {
    while (senha != senhaUser && tentativas < 3) {
        senhaUser = prompt('Senha incorreta. Digite novamente:');
        tentativas++;
    }
    alert('Limite de tentativas excedido. Acesso bloqueado.');
}
