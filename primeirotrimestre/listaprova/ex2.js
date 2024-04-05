 let numero = parseInt(prompt("Digite um número menor que 100:"));

if (numero >= 0 && numero < 100) {

    let dezena = Math.floor(numero / 10);
    let unidade = numero % 10;
   

    let soma = dezena + unidade;

    console.log("A soma dos dígitos do número " + numero + " é: " + soma);
}
else {
   
    console.log("Número inválido. Insira um número menor que 100.");
}
