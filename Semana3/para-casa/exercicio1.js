// 1. Crie uma função que receba um número como parâmetro e retorne "par" se o número for par e "ímpar" se o número for ímpar. OK

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }

  var resultado = verificarParImpar(7);
  console.log(resultado);
