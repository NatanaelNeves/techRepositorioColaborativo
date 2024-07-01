function intervalo (n1=0,n2=0){
   let soma = 0

   for(let i=n1; i<=n2; i++){
    soma += i
   }

   return soma
}

let soma1a100 = intervalo(1,100)
alert(soma1a100)

alert(intervalo(2,4))