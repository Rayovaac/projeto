let lado1 = parseInt(prompt("Digite um lado: "))
let lado2 = parseInt(prompt("Digite um lado: "))
let lado3 = parseInt(prompt("Digite um lado: "))

if (lado1==0 || lado2==0 || lado3==0){
 window.alert ("Não é um triângulo. ")
}
 else{
 if (lado1==lado2 && lado2==lado3) {
 window.alert ("0 triângulo é equilátero. ")
 }
 else if (lado1==lado2 || lado2==lado3 || lado1==lado3){
 window.alert ("0 triângulo é isósceles. ")
 }
 else{
 window.alert ("0 triângulo é escaleno. ")
  }
   
 }
