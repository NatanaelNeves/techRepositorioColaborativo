// repetir 3x Sao Longuinho
// console.log('São Longuinho')
// console.log('São Longuinho')
// console.log('São Longuinho')

let quantasVezes = 3 
let i = 1
let acumulador = 0

// a cada vez que chamar sao longuinho ganhara 100 reais
while(i<= quantasVezes) {
    console.log('São Longuinho')
    console.log('Ganhou 100')
    acumulador += 100
    i+=1
}

//escreva de 0 a 10 de 2 em 2 

let numero = 0
while(numero<=10){
    console.log(numero+=2)
}

//faça a soma de todos os numeros pares de 0 a 100 e mostre o resultado no console

j = 0
let final = 100
let soma 

while(i<=final){
    if(j%2==0){
        soma += j 
    }
   j += 1
}

//fazer a soma de todos os numeros pares ou divisiveis por 5 no intervalo de 0 a 100

let soma1 = 0;
let k = 0;

while (i <= 100) {
    if (k % 2 === 0 || k % 5 === 0) {
        soma1 += k;
    }
    k += 1
}

console.log(soma1);
