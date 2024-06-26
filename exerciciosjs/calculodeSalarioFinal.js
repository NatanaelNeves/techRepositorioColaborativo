// beneficios sob tempo de empresa
let nome = prompt('Digite o seu nome')
let opcaoTempoEmpresa = Number (prompt('Digite, apenas em numero, a opcao que esta relacionada ao seu tempo de empresa \n 1- Menos de um ano \n 2- Entre 1 e 2 anos \n 3- Entre 2 e 5 anos \n 4- Entre 5 e 10 anos \n 5- Mais de 10 anos'))
let qtdDeMenor = Number (prompt('Digite o número de dependentes menores que 7 anos'))
let salarioBase = Number (prompt('Digite o seu salario base'))

// menos de 1 ano ------- 0% sob o salario base
// entre 1 e 2 anos --- 5% sob o salario base
//de 2 a 5 anos ---- 10% sob o salario base
//de 5 a 10 anos ---- 15% sob o salario base
//mais de 10 anos ---- 20% sob o salario base
let bonus1
    switch (opcaoTempoEmpresa) {
        case 1:
            bonus1 = 0;
            break;
            case 2:
                bonus1 = salarioBase * 0.05;
            break;
            case 3:
                bonus1 = salarioBase * 0.10;
            break;
            case 4:
                bonus1 = salarioBase * 0.15;
            break;
           case 5:
            bonus1 = salarioBase * 0.20;
            break;
            default:
                bonus1 = 0
                alert('O texto inserido no campo de bonificação não é apenas numerico')
                break;
    }

// beneficios por dependente
// R$ 500,00 por dependente menor que 7 anos
let Bonusdependente= qtdDeMenor * 500

// VA-------- R$ 1000,00
// VT-------- R$ 200,00
let VA = 1000
let VT = 200

// DESCONTOS 
// INSS ----------------- 9% do salario base
// FGTS ----------------- 8% do salario base
let INSS = salarioBase * 0.09;
let FGTS = salarioBase * 0.08;
// com base nos criterios, ler as informações de um empregado e exibir na tela o total a receber descrevendo cada um dos custos, tanto beneficios quanto descontos, por cateforia

document.write(`
                Apontamentos Folha de Pagamento <br> 
                <ul>
                <li>Nome: ${nome} </li>
                <li>Salario Base: ${salarioBase} R$ </li>
                <li>Tempo de empresa: ${opcaoTempoEmpresa} anos </li>
                <li>Total de bonus: ${bonus1+VA+VT+Bonusdependente} </li>
                <li>Total de descontos: ${INSS+FGTS} </li>
                <li>Total a ser recebido: ${salarioBase+bonus1+VA+VT+Bonusdependente-INSS+FGTS} R$</li>
                <ul>
            `)






