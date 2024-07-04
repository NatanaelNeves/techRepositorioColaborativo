let nome = document.getElementById('nome')


let peso = document.querySelector('#peso')

let altura = document.querySelectorAll('#altura')[0]

let resposta = document.querySelector('div')

function calcularIMC() {
    let nomeUser = nome.value;
    let pesoUser = Number(peso.value);
    let alturaUser = Number(altura.value);
    let IMC = pesoUser / (alturaUser ** 2);

    let mensagem = '';

    if (IMC < 16) {
        mensagem = `<p>${nomeUser}, você está muito abaixo do peso.</p>`;
    } else if (IMC >= 16 && IMC <= 16.9) {
        mensagem = `<p>${nomeUser}, você está abaixo do peso.</p>`;
    } else if (IMC >= 17 && IMC <= 18.4) {
        mensagem = `<p>${nomeUser}, você está abaixo do peso.</p>`;
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        mensagem = `<p>${nomeUser}, você está com peso normal.</p>`;
    } else if (IMC >= 25 && IMC <= 29.9) {
        mensagem = `<p>${nomeUser}, você está acima do peso.</p>`;
    } else if (IMC >= 30 && IMC <= 34.9) {
        mensagem = `<p>${nomeUser}, você está com obesidade grau 1.</p>`;
    } else if (IMC >= 35 && IMC <= 40) {
        mensagem = `<p>${nomeUser}, você está com obesidade grau 2.</p>`;
    } else if (IMC > 40) {
        mensagem = `<p>${nomeUser}, você está com obesidade grau 3.</p>`;
    }

    // Exibindo todas as informações
    resposta.innerHTML = `<p>${nomeUser}, seu IMC é de ${IMC.toFixed(2)}.</p>`;
    resposta.innerHTML += mensagem;
}

