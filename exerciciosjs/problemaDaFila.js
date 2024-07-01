// let fila = ['Ana','Julia','Pedro','Roney','Matheus','Yan','Miguel','Danda','Livia','Thiago']
// let ultimosAtendidos = []
// let atendimentoAmanha=[]
// //3 pessoas a serem atendidas
// for(let i=1; i<=3; i++) {
//     ultimosAtendidos.push(fila.shift()) // remove a primeira pessoa da fila
//     ultimosAtendidos.unshift(ultimo)// adiciona a pessoa removida no inicio da fila de atendidos
// }

// let novoTamanholista = fila.length

// //demais serao colocados para o proximo dia

// for(let i=1; i<=novoTamanholista; i++){
//     let proximo = fila.shift()
//     atendimentoAmanha.push(proximo)
// }
let numeros= [1,2,3]
function multiplicar(num){
    return num**2
}

let numerosAoQuadrado = numeros.map((item)=> multiplicar(item))
console.log(numeros)
console.log(numerosAoQuadrado)