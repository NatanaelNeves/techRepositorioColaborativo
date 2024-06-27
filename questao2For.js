//Faça um programa que receba dez números e usando laços de repetição calcule mostre a quantidade de números entre 30 e 90.
7
let qtdNumeros = 10
let somaNumeros = 0

for(let i = 1; i <= qtdNumeros; i++ ){
    let num= Number(prompt(` Digite o ${i}º número`))
    somaNumeros += num
}
alert(` A soma dos ${qtdNumeros} é ${somaNumeros}`)



let inicio = 30
let final = 90
let totalNumIntervalo = 0

for (let cont = inicio; cont < final ; cont++) {
    totalNumIntervalo +=1   
}

alert(`Entre os números ${inicio} e ${final} existem ${totalNumIntervalo} numeros`)