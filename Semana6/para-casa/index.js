// Nosso cliente é uma cafeteria que precisa de uma aplicação em NodeJS que exiba todos os itens do cardápio :coffee: :bread: 

const menu = [
    {
      nome: "Café Expresso",
      descricao: "Café forte servido em uma xícara pequena.",
      preco: 3.5,
      vegano: true,
      vegetariano: true
    },
    {
      nome: "Café com Leite",
      descricao: "Café com uma proporção de leite, servido em uma xícara média.",
      preco: 4.0,
      vegano: false,
      vegetariano: true
    },
    {
      nome: "Pão de Queijo",
      descricao: "Pãozinho de queijo com massa macia e queijo derretido por dentro.",
      preco: 2.5,
      vegano: false,
      vegetariano: true
    }
  ];
  
  menu.forEach(item => {
    console.log(`Nome: ${item.nome}`);
    console.log(`Descrição: ${item.descricao}`);
    console.log(`Preço: R$ ${item.preco.toFixed(2)}`);
    console.log(`Vegano: ${item.vegano ? "Sim" : "Não"}`);
    console.log(`Vegetariano: ${item.vegetariano ? "Sim" : "Não"}`);
    console.log("----------------------------");
  });
  