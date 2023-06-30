// 3. Crie uma função que receba duas strings como parâmetros e retorne a concatenação das duas strings se ambas tiverem o mesmo tamanho. Se não tiverem o mesmo tamanho, retorne apenas a string de maior tamanho.

function concatenarStrings(string1, string2) {
    if (string1.length === string2.length) {
      return string1 + string2;
    } else if (string1.length > string2.length) {
      return string1;
    } else {
      return string2;
    }
  }
  

  var resultado = concatenarStrings("Olá", "Mundo");
  console.log(resultado);

  var resultado = concatenarStrings("Amigo", "Amigo");
console.log(resultado);
