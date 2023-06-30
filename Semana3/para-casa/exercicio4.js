// 4. Crie uma função que receba uma string como parâmetro e retorne "Sim" se a string contém a letra "a" ou "A" e "Não" caso contrário.

function verificarPresencaA(string) {
    if (string.includes("a") || string.includes("A")) {
      return "Sim";
    } else {
      return "Não";
    }
  }
  
  var resultado = verificarPresencaA("Oi, mundo!");
console.log(resultado);

var resultado = verificarPresencaA("Ola, mundo!");
console.log(resultado);