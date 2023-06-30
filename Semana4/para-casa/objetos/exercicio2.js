// 2. Crie um objeto chamado calculadora com as seguintes propriedades: soma, subtracao


const calculadora = {
  soma: function (num1, num2) {
    return num1 + num2;
  },
  subtracao: function (num1, num2) {
    return num1 - num2;
  }
};

console.log(calculadora.soma(5, 3));

console.log(calculadora.subtracao(10, 4));
