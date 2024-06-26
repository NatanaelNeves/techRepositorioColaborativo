// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura)². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// Abaixo de 18,5: Abaixo do peso
// Entre 18,5 e 25: Peso normal
// Entre 25 e 30: Acima do peso
// Acima de 30: Obeso

let peso = Number(prompt( 'Digite seu peso em kg: ')) 
let altura = Number(prompt( 'Digite sua altura em metros: ')) 

// Calcular o IMC
let imc = peso / (altura * altura) 

// Determinar a condição com base no IMC calculado
let condicao = '' 
if (imc < 18.5) {
    condicao =  'Abaixo do peso ' 
} else if (imc >= 18.5 && imc < 25) {
    condicao =  'Peso normal ' 
} else if (imc >= 25 && imc < 30) {
    condicao =  'Acima do peso ' 
} else {
    condicao =  'Obeso ' 
}

// Exibir a condição do IMC
alert(`Seu IMC é ${imc} e você está ${condicao}`) 