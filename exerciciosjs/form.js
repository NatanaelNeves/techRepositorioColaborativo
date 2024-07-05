
let valorEntrada = document.getElementById('entrada');
let valorPrincipal = document.getElementById('principal');
let valorBebida = document.getElementById('Bebida');
let valorSobremesa = document.getElementById('sobremesa');
let subTotal = document.getElementById('sub-total')
let taxaservico = document.getElementById('taxaServico')
let total = document.getElementById('total')

function alteracao(){
    console.log('campo alterado')
}


function caclularTotal(){
   let precoTotal= Number(valorEntrada.value) + Number(valorPrincipal.value) + Number(valorBebida.value) + Number(valorSobremesa.value)

   let valorTaxa= precoTotal*0.1

   let totalApagar= precoTotal+valorTaxa

   return [precoTotal, valorTaxa, totalApagar]
}

function mostrarConta(){
    let valores = caclularTotal()

    subTotal.value = valores[0]

    taxaservico.value = valores[1].toFixed(2)

    total.value = valores[2].toFixed(2)
}