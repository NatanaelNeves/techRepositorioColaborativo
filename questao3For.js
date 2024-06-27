// Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi
// superior a loja B (faturamento = 54000).  Se o faturamento atingir esse valor 
//mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

let faturamentoLojaB= 54000
let faturamentoLojaA = 0
let qtdClientes = 5

for(let i=1; i<=qtdClientes; i++){
    let compraCliente = Number(prompt(`Digite o valor da compra do cliente nº ${i}`))
    faturamentoLojaA+= compraCliente
}

if(faturamentoLojaA > faturamentoLojaB){
    let diferencaFaturamento=  parseFloat(faturamentoLojaA- faturamentoLojaB)

    alert(`O faturamento da loja A foi maior que o faturamento da loja B em R$ ${diferencaFaturamento}`)
}

else if(faturamentoLojaA < faturamentoLojaB){
    alert(`O faturamento da loja A não foi maior que o faturamento da loja B`)
}

else{
    alert(`O faturamento da loja A igual faturamento da loja B`)
}