// Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, e imprima o resultado desta operação.
let num = Number(prompt('Digite um número'))

if( num % 2 == 0){
    num += 5
}
else{
    num += 8
}

alert(num)