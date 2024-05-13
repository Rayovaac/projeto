
document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const sexo = document.getElementById("sexo").value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    try {
        const resultado = calcularBasal(sexo, idade, peso, altura);
        document.getElementById("resultado").textContent = resultado;
    } catch (error) {
        document.getElementById("resultado").textContent = error.message;
    }
});

function calcularBasal(sexo, idade, peso, altura) {

  if (isNaN(idade) ||isNaN(peso) || isNaN(altura) || idade <= 0 || peso <= 0 || altura <= 0) {
      throw new Error("Por favor, insira um valor válido e positivo para peso e altura.");
  }
  else {
    
      if (sexo == "M") {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        mensagem = "Sua Taxa Metabólica Basal (TMB) é: " + tmb.toFixed(2) + " calorias por dia.";
        return mensagem
      }
      else if (sexo == "F") {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
          mensagem = "Sua Taxa Metabólica Basal (TMB) é: " + tmb.toFixed(2) + " calorias por dia.";
        return mensagem
      } 
      else {
        throw new Error("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.");
      }
  }
      
    };
