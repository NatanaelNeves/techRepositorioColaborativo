// Faça um programa que receba um número e usando
//laços de repetição calcule e mostre a tabuada desse número.

let numTabuada =  Number(prompt('Digite o número da tabuda que deseja exibir'))

document.write('<h1>Tabudada</h1>')

for(let num =1 ; num<=10; num++){
    document.write(`<p> ${num} x ${numTabuada} = ${numTabuada * num} </p>`)  // usando tags do html
}

