// Escreva um algoritmo que leia três valores. A, B, C. E informe se a soma de A + B é maior que C.
let num1 = Number(prompt('Digite o primeiro numero: '))
let num2 = Number(prompt('Digite o segundo numero: '))
let num3 = Number(prompt('Digite o terceiro numero: '))

if(num1+num2>num3){
   alert(`A soma de A (${num1}) e de B (${num2}) É MAIOR que C(${num3}))`)
} else {
    alert(`A soma de A (${num1}) e de B (${num2}) NÃO É MAIOR que C(${num3}))`)
}
