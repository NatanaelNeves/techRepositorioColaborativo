let enderecoArray = ['Rua', 'Bairro', 'Cidade','Estado', 'CEP']

for(let elemento in enderecoArray){
    console.log(elemento)
}

let endereco = {rua: 'Rua', bairro: 'Bairro', cidade: 'Cidade', estado: 'Estado', cep:'CEP', 1:'coisa'}

//crie um objeto chamado pessoa com as propriedades altura e peso

let pessoa= {nome: 'Ana', idade:20, altura:1.70, peso:60  ,

    calcularimc: function(){
        return
        pessoa.peso / (pessoa.altura**2)
    }
}


console.log(`Nome: ${pessoa.nome}, idade:${pessoa.idade}, altura:${pessoa.altura}, peso:${pessoa.peso}`) 


let imc= pessoa.calcularimc

pessoa.corFavorita = 'azul'

console.log(pessoa.imc)

// crie um array com 5 produtos 
// cada produto deve ser um objeto com propriedades nome, preco, cor, tamanho e disponibilidade: atributo e for
//crie um metodo calcularDesconto que recebe um numero e retorna o preço com desconto: funcao
// crie um metodo alterar disponibilidade. Se a disponibilidade estiver true, altere para false e vice-versa.: funcao

