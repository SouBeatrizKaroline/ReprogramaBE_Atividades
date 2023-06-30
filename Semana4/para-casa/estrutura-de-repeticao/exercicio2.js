// 2. Crie um objeto chamado `animal` com as seguintes propriedades: nome, cor, nome_dono

var animal = {
    nome: "Gato",
    cor: "Branco e Preto",
    nome_dono: "Beatriz",
  };
  
  for (var propriedade in animal) {
    console.log(propriedade + ": " + animal[propriedade]);
  }
  