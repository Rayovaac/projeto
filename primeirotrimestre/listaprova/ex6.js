function somar(numerol, numero2, numero3){
return numerol+numero2+numero3
}

let numerol=Number(prompt("Digite o primeiro número:"))
let numero2=Number(prompt("Digite o segundo número: "))
let numero3=Number(prompt("Digite o terceiro número:"))
let resultado=somar (numerol,numero2,numero3)
 window.alert ("A soma desses três números resulta em "+resultado)
