let frutas = ['maça', 'uva', 'banana']

let numeros = [1,2,3,4]

//sem necessidade de armazenar retorno
frutas.forEach((FRUTA)=> console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num)=> 
    {
   console.log(num)
   return num*2
})

//construir um array de 4 objetos. Cada objeto terá as seguintes chaves: nome, nota. Sendo a nota entre 0 a 10

    let alunos= [{nome: 'Ana', nota:10}, {nome: 'Natan', nota:5}, {nome: 'Lucas', nota:8}, {nome: 'Julio', nota:7}]
    console.log(alunos)

    //montar um arrey de objetos, contendo apenas nos aprovados (nota maior quee 7)

    let aprovados= alunos.filter ((item)=>{
        if(item.nota>=7){
            return (item.nome)
        }
    })
    // let nota = aprovados.map((elemento)=> elemento.nota)
    // let somaNotas= nota.reduce((soma, nota)=> elemento.nota)

    let somaNumeros = numeros.reduce((soma, num)=> soma += num,100)

    console.log(somaNumeros)

   
    //Métodos agregadores
let funcionarios= [{
    nome: 'natan' ,
    cargo: 'dev' ,
    salario: 5000.00 ,
    gratificacao:200.00 ,
    idade: 21} ,
    {
        nome: 'levi' ,
        cargo: 'analista' ,
        salario: 10000.00 ,
        gratificacao:300.00 ,
        idade: 30},
        {
            nome: 'luis' ,
            cargo: 'estagio' ,
            salario: 700.00 ,
            gratificacao:50.00 ,
            idade: 18},
            {
                nome: 'ana' ,
                cargo: 'design' ,
                salario: 3000.00 ,
                gratificacao:100.00 ,
                idade: 22},
                {
                    nome: 'alberto' ,
                    cargo: 'professor' ,
                    salario: 2000.00 ,
                    gratificacao:300.00 ,
                    idade: 25}
]

//1) Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.
funcionarios.forEach((item)=> console.log(`${item.nome} recebe R$ ${(item.salario)+(item.gratificacao)} de salario e bonificação`))

//2)Para o mesmo array de objetos pessoas, crie um novo array, com apenas os valores das gratificações
let gratificacoes = funcionarios.map((item) => item.gratificacao);
console.log(gratificacoes);


//3)Utilizando o map, crie uma função que retorna um array, com os valores dobrados do array de gratificações.

let gratificacoesDobro = funcionarios.map((item)=> item.gratificacao*2)
console.log(gratificacoesDobro)

//4) Crie um array com as pessoas (objeto) que recebem mais que 4mil reais de salario.
let salarioMais4Mil = funcionarios.filter((item) => item.salario > 4000);
console.log(salarioMais4Mil);


//5) Crie um array com as pessoas (objeto) que têm mais de 20 anos.
let pessoasMais20Anos = funcionarios.filter((item) => item.idade > 20);
console.log(pessoasMais20Anos);

//5) Exiba o valor total das gratificações. Utilize reduce. 
let totalGratificacoes = funcionarios.reduce((total, item) => total + item.gratificacao, 0);
console.log(`O valor total das gratificações é R$ ${totalGratificacoes.toFixed(2)}`);

