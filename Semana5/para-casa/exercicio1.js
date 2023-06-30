// 1. Você precisa criar um programa para gerenciar uma loja de livros.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Livro {
  constructor(titulo, autor, editora, preco) {
    this.id = this.gerarId();
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.preco = preco;
  }

  gerarId() {
    let id = Math.floor(Math.random() * 101);

    while (Livro.idsUtilizados.includes(id)) {
      id = Math.floor(Math.random() * 101);
    }

    Livro.idsUtilizados.push(id);
    return id;
  }
}

Livro.idsUtilizados = [];

class Loja {
  constructor() {
    this.livros = [];
  }

  cadastrarLivro(titulo, autor, editora, preco) {
    const livro = new Livro(titulo, autor, editora, preco);
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" cadastrado com sucesso.`);
  }

  listarLivros() {
    if (this.livros.length === 0) {
      console.log("Nenhum livro cadastrado.");
    } else {
      console.log("Lista de livros cadastrados:");
      this.livros.forEach((livro, index) => {
        console.log(`Livro ${index + 1}: ${livro.titulo} - ${livro.autor} | Editora: ${livro.editora} | Preço: R$ ${livro.preco}`);
      });
    }
  }

  buscarLivro(titulo) {
    const foundBooks = this.livros.filter((livro) => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (foundBooks.length === 0) {
      console.log("Nenhum livro encontrado com esse título.");
    } else {
      console.log(`Livros encontrados com o título "${titulo}":`);
      foundBooks.forEach((livro, index) => {
        console.log(`Livro ${index + 1}: ${livro.titulo} - ${livro.autor} | Editora: ${livro.editora} | Preço: R$ ${livro.preco}`);
      });
    }
  }

  apagarLivro(id) {
    const livroIndex = this.livros.findIndex((livro) => livro.id === id);

    if (livroIndex === -1) {
      console.log("Livro não encontrado.");
    } else {
      const deletedBook = this.livros.splice(livroIndex, 1);
      console.log(`Livro "${deletedBook[0].titulo}" removido com sucesso.`);
    }
  }
}

const minhaLoja = new Loja();

function exibirMenu() {
  console.log("\n========= MENU =========");
  console.log("1 - Cadastrar livro");
  console.log("2 - Listar livros");
  console.log("3 - Buscar livro");
  console.log("4 - Apagar livro");
  console.log("0 - Sair");
  console.log("=========================\n");
}

function cadastrarLivro() {
  rl.question("Digite o título do livro: ", (titulo) => {
    rl.question("Digite o autor do livro: ", (autor) => {
      rl.question("Digite a editora do livro: ", (editora) => {
        rl.question("Digite o preço do livro: ", (preco) => {
            minhaLoja.cadastrarLivro(titulo, autor, editora, parseFloat(preco));
            exibirMenu();
            realizarAcao();
          });
        });
      });
    });
  }
  
  function buscarLivro() {
    rl.question("Digite o título do livro a ser pesquisado: ", (titulo) => {
      minhaLoja.buscarLivro(titulo);
      exibirMenu();
      realizarAcao();
    });
  }
  
  function apagarLivro() {
    rl.question("Digite o ID do livro a ser apagado: ", (id) => {
      minhaLoja.apagarLivro(parseInt(id));
      exibirMenu();
      realizarAcao();
    });
  }
  
  function realizarAcao() {
    rl.question("Escolha uma ação: ", (opcao) => {
      switch (opcao) {
        case '1':
          cadastrarLivro();
          break;
        case '2':
          minhaLoja.listarLivros();
          exibirMenu();
          realizarAcao();
          break;
        case '3':
          buscarLivro();
          break;
        case '4':
          apagarLivro();
          break;
        case '0':
          rl.close();
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
          exibirMenu();
          realizarAcao();
      }
    });
  }
  
  exibirMenu();
  realizarAcao();