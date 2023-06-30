// 1. Crie um objeto chamado `pessoa` com as seguintes propriedades: nome, idade, saudacao()


const pessoa = {
    nome: "Beatriz",
    idade: 24,
    saudacao: function () {
      return "Olá, meu nome é " + this.nome + ".";
    }
  };
  
  console.log(pessoa.saudacao());