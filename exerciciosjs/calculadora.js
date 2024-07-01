function somar(n1, n2) {
    return n1+ n2
}

function subtrair (n1, n2) {
    return n1 - n2
}

function multiplicação(n1, n2) {
    return n1 * n2
}

function divisão(n1, n2) {
    if(n2!=0){
        return n1 / n2
    } else{
        return('divisao impossivel, divisor informado é igual a 0')
    }
}

function calculadora( n1, n2,operacao) {
    let funcao = eval(operacao)
    let resultado = funcao(n1, n2)
    alert(resultado)
}


let numero1 = Number (prompt('Digite o primeiro numero'))
let numero2 = Number (prompt('Digite o segundo numero'))

let opcao = Number (prompt('Escolha a operação: 1 para subtrair, 2 para somar, 3 para multiplicação, 4 para divisão'))

calculadora(numero1, numero2, opcao)

// switch (operação) {
//     case 1:
//         alert(numero1 - numero2)
//         break;

//         case 2:
//             alert(numero1 + numero2)
//             break;

//             case 3:
//                 alert(numero1 * numero2)
//                 break;

//                 case 4:
//                     if(num2 != 0) {
//                     alert(numero1 / numero2)
//                     break;
//                 } else {
//                     alert('Nao é possivel divisao por 0')
//                 }
//     default:
//         alert('Escolha uma operação!')
//         break;
// }



