let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul= document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadro')

function mudarCor(cor){
    quadro.style.background= cor
}