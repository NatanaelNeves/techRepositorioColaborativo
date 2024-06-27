//Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas

let mediaNotas
let somaNotas = 0
let qtdNotas = parseInt(prompt('Digite a quantidade de notas a serem lidas'))

for(let cont = 1 ; cont<= qtdNotas; cont ++ ){
    let nota = Number(prompt(`Digite a nota nº ${cont}`))
    somaNotas += nota
}

mediaNotas = somaNotas / qtdNotas

alert(` A média das ${qtdNotas} inseridas é ${mediaNotas}`)

