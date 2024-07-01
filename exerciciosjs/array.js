// crie uma funcao que armazena 3 notas, lidas do usuario, em um array. O ultimo elemento do array sera a media calculada a partir das notas informadas pelo usuario
// retorne o array

// function media3notas (n1, n2, n3){
//     let notas =[]
//     for(let i=1;i<=3; i++){
//         notas[i-1]= Number(prompt(`Digita a ${i}° nota`))

//     }
//     notas[notas.length]= (notas[0] + notas[1] + notas [2]) / notas.length
//     return notas
// }


// let arrayNotas = media3notas

let arrayNotas = [1,2,3]
console.log(arrayNotas)
arrayNotas[3] = 'A'

//adiciona ao final
console.log(arrayNotas)
arrayNotas.push('B')

//exclusao do ultimo elemento 
console.log(arrayNotas)
let excluido = arrayNotas.pop()

//adiciona ao inicio
console.log(arrayNotas)
arrayNotas.unshift('inicio')
//remover do inicio
console.log(arrayNotas)
arrayNotas.shift()