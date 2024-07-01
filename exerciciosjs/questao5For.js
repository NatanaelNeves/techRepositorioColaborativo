// Uma loja tem uma política de descontos de acordo com o valor da 
//compra do cliente. Os descontos começam acima dos R$500
// A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto
// cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ... etc... 
//Faça um programa que exiba essa tabela de descontos no seguinte formato:
// Valordacompra - porcentagem de desconto - valor final

/// Função para calcular o desconto com base no valor da compra
let min =1
let max= 25
let valorCompra = 500.00
let incrementoCompra = 100.00

for(let i=min ; i <= max; i++){
    let valorFinal = valorCompra - (valorCompra* i/100)
    console.log(`Valor da compra: ${valorCompra.toFixed(2)}- ${i}%-  Valor Final: ${valorFinal.toFixed(2)}`)


}
