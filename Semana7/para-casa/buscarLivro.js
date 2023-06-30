const buscarLivro = () => {
    return new Promise((resolve, reject) => {
      // Simulação de busca do livro
      setTimeout(() => {
        const livro = {
          id: 1,
          titulo: "Arquitetura Limpa",
          autor: "Martin",
        };
        resolve(livro);
      }, 2000);
    });
  };
  
  const buscarUsuarios = (livroId) => {
    return new Promise((resolve, reject) => {
      // Simulação de busca dos usuários do livro
      setTimeout(() => {
        const usuarios = [
          {
            id: 1,
            nome: "Milena Gomes",
            email: "milenagomes@email.com",
            idLivro: 1,
          },
          {
            id: 2,
            nome: "Luke Skywalker",
            email: "luke@skywalker.com",
            idLivro: 1,
          },
        ];
        const usuariosDoLivro = usuarios.filter(
          (usuario) => usuario.idLivro === livroId
        );
        resolve(usuariosDoLivro);
      }, 2000);
    });
  };
  
  const buscarLivroUsuarios = async () => {
    try {
      const livro = await buscarLivro();
      console.log("Livro Encontrado:");
      console.log("ID:", livro.id);
      console.log("Título:", livro.titulo);
      console.log("Autor:", livro.autor);
  
      const usuarios = await buscarUsuarios(livro.id);
      console.log("Usuários do Livro:");
      usuarios.forEach((usuario) => {
        console.log("Nome:", usuario.nome);
        console.log("Email:", usuario.email);
        console.log("---------------------");
      });
    } catch (error) {
      console.log("Erro ao buscar o livro e os usuários:", error);
    }
  };
  
  buscarLivroUsuarios();  