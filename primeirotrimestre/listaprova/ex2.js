 let x=Number=(prompt ("Digite um número de dois dígitos menor que 100): ")

 if(x>=100){
 window.alert ("Núnero inválido")
 }
 else{
 dezena=x/10
 unidade=x*10
 soma=dezena+unidade
 soma=parseInt (soma)
 window.alert("A soma dos dígitos é: "+soma )
   
}
