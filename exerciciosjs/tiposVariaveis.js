let varivaelTipoLet= 'coisa'

var varivaelTipoVar = 'coisa2'

const varivaelTipoConst = 'coisa3'

// leia o nome, idade e endereço, armazene em variaveis e mostre no console o texto no formato:
// 'Fulano tem 19 anos e mora em Fortaleza'
// NOME tem IDADE e mora em ENDEREÇO

let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')
idade = Number(idade)

let endereço = prompt('Digite seu endereço')

// exibião das informacoes no console
console.log(nome + ' tem ' + idade + 'anos e mora em' + endereço)

console.log(`${nome} tem ${idade} anos e mora em ${endereço}`)

// 'daqui a 10 anos fulano tem 29 anos'


console.log(`Daqui 10 anos ${nome} terá ${idade + 10} anos`)





