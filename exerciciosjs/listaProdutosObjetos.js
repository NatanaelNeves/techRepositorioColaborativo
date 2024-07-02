//em javascript
// crie um array com 5 produtos 
// cada produto deve ser um objeto com propriedades nome, preco, cor, tamanho e disponibilidade: atributo e for
//crie um metodo calcularDesconto que recebe um numero e retorna o preço com desconto: funcao
// crie um metodo alterar disponibilidade. Se a disponibilidade estiver true, altere para false e vice-versa.: funcao


for(let i=1; i<=5; i++){
    

    let produto = {
        nome: prompt(`Nome do produto nº ${i}`) ,
        preco: parseFloat(prompt(`Preço do produto nº ${i}`)) ,
        cor: prompt(`Cor do produto nº ${i}`) ,
        tamanho: prompt(`Tamanho do produto nº ${i}`),
        disponibilidade: confirm(`Produto nº ${i} está disponivel?`),
        calcularDesconto: function(desconto=0){
            return produto.preco* (1-desconto/100)
        },
        alterarDisponibilidade: function(){
            if(produto.disponibilidade){
                produto.disponibilidade = false
            } else{
                    produto.disponibilidade= true
                }
            }
        }
    
   console.log(produto)

}


