let numero1 = Number (prompt('Digite o primeiro numero'))
let numero2 = Number (prompt('Digite o segundo numero'))

let operação = Number (prompt('Escolha a operação: 1 para subtrair, 2 para adição, 3 para multiplicação, 4 para divisão'))


switch (operação) {
    case 1:
        alert(numero1 - numero2)
        break;

        case 2:
            alert(numero1 + numero2)
            break;

            case 3:
                alert(numero1 * numero2)
                break;

                case 4:
                    if(num2 != 0) {
                    alert(numero1 / numero2)
                    break;
                } else {
                    alert('Nao é possivel divisao por 0')
                }
    default:
        alert('Escolha uma operação!')
        break;
}



