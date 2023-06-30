const buscarUsuarios = (livroId) => {
    return new Promise((resolve, reject) => {
      // Simulação de busca dos usuários do livro
      setTimeout(() => {
        const usuarios = [
          {
            id: 1,
            nome: "Milena Gomes",
            email: "milenagomes@email.com",
          },
          {
            id: 2,
            nome: "Luke Skywalker",
            email: "luke@skywalker.com",
          },
        ];
        const usuariosDoLivro = usuarios.filter(
          (usuario) => usuario.idLivro === livroId
        );
        resolve(usuariosDoLivro);
      }, 2000);
    });
  };
  
  buscarUsuarios(1)
    .then((usuarios) => {
      console.log("Usuários do Livro:");
      usuarios.forEach((usuario) => {
        console.log("Nome:", usuario.nome);
        console.log("Email:", usuario.email);
        console.log("---------------------");
      });
    })
    .catch((error) => {
      console.log("Erro ao buscar os usuários:", error);
    });
  