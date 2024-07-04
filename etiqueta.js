let valorInput = document.getElementById('valor');
let quantidadeInput = document.getElementById('qtd');
let corSelect = document.querySelector('input[name="cor"]:checked');
let resposta = document.getElementById('desconto'); // Corrigido para '#desconto'

function calcularDesconto() {
    let descontoCor = 0;
    let descontoQuantidade = 0;
    let cor = 'indefinida';

    // Calculando desconto por cor
    if (corSelect) {
        if (corSelect.id === 'vermelho') {
            descontoCor = parseFloat(valorInput.value) * 0.5;
            cor = 'Vermelho';
        } else if (corSelect.id === 'verde') {
            descontoCor = parseFloat(valorInput.value) * 0.3;
            cor = 'Verde';
        } else if (corSelect.id === 'amarelo') {
            descontoCor = parseFloat(valorInput.value) * 0.15;
            cor = 'Amarelo';
        }
    }

    // Calculando desconto por quantidade
    if (quantidadeInput.value > 2) {
        descontoQuantidade = parseFloat(valorInput.value) * 0.1;
    }

    let valorFinal = (parseFloat(valorInput.value) * parseFloat(quantidadeInput.value)) - (descontoCor + descontoQuantidade);

    resposta.innerHTML = `
        <ul>
            <li>Preço original peça: R$ ${valorInput.value}</li>
            <li>Cor da etiqueta: ${cor}</li>
            <li>Desconto por cor: ${(descontoCor * 100).toFixed(2)}%</li>
            <li>Quantidade de peças: ${quantidadeInput.value} peças</li>
            <li>Desconto por quantidade: ${(descontoQuantidade * 100).toFixed(2)}%</li>
            <li>Total da compra com desconto: R$ ${valorFinal.toFixed(2)}</li>
        </ul>
    `;
}

