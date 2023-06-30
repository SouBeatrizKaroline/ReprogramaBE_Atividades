// 5. Crie um `do while` que peça para o usuário digitar um número.Se o número digitado for par, imprima no console amensagem _"O número é par"_. Caso contrário, imprima _"O número é ímpar"_.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pegarEntradaUsuario() {
  return new Promise((resolve) => {
    rl.question("Digite um número ou digite 0 para sair:\n", (respostaPrompt) => {
      const resposta = parseInt(respostaPrompt);
      if (resposta === 0) {
        console.log("Até a próxima!");
      } else if (resposta % 2 === 0) {
        console.log("O número é par");
      } else {
        console.log("O número é ímpar");
      }
      resolve(resposta);
    });
  });
}

(async function () {
  let respostaPromise;

  do {
    respostaPromise = await pegarEntradaUsuario();
  } while (respostaPromise !== 0);

  rl.close();
})();