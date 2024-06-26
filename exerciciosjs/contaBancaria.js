// nome do titular
// saldo
let nome = (prompt('Digite o nome do titular'))
let saldo = Number (prompt('Digite o saldo'))
let entradaSenha = prompt('Digite sua senha')
let senha = 'sache100'

    if (senha == entradaSenha){

        let escolha = Number (prompt(`${nome} digite uma operação para sua conta: \n 1-Deposito \n 2-Saque \n 3-Saldo `))

        switch (escolha) {

            case 1:
                let deposito = Number (prompt('Digite o valor do deposito'))
                saldo += (saldo+deposito)
                alert(`Olá ${nome}, o valor do saldo é de: ${saldo}`)
    
                break;
        
        
            case 2:
                let saque = Number (prompt('Digite o valor de saque'))
                if(saldo>=saque){
                    saldo-= saque
                    alert('Saque realizado com sucesso!')
                } else {
                    alert('Saldo insuficiente :(')
                }
                alert(`Olá ${nome}, o valor do saldo é de: ${saldo}`)
                break;
    
    
                case 3:
                    alert(`Olá ${nome}, o valor do saldo é de: ${saldo}`)
                    break;
            default:
                alert('a operação desejada não está disponivel em nenhuma das nossas opções')
                break;
        }

    } else {
        alert('Acesso negado! Senha incorreta!')
    }







// 3 operações basicas:
// deposito


// saque
// saldo superior ao valor de saque
// saldo inferior ao valor de saque

// extrato