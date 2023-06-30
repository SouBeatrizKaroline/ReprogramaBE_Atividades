const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor de filmes Ghibli!');
  });

  app.get('/filmes', (req, res) => {
    const filmes = [
      { id: 1, titulo: 'Meu Amigo Totoro', diretor: 'Hayao Miyazaki' },
      { id: 2, titulo: 'A Viagem de Chihiro', diretor: 'Hayao Miyazaki' },
      { id: 3, titulo: 'Princesa Mononoke', diretor: 'Hayao Miyazaki' }
    ];
    
    res.json(filmes);
  });
  
  app.get('/filmes/titulo/:titulo', (req, res) => {
    const titulo = req.params.titulo;
  
    res.send(`Buscando filme com título: ${titulo}`);
  });
  
  app.get('/filmes/id/:id', (req, res) => {
    const id = req.params.id;
  
    res.send(`Buscando filme com ID: ${id}`);
  });
  
  app.get('/filmes/diretor/:diretor', (req, res) => {
    const diretor = req.params.diretor;
  
    res.send(`Buscando filme do diretor: ${diretor}`);
  });
  
  app.post('/filmes', (req, res) => {
    const filme = req.body;

    res.send(`Filme cadastrado: ${JSON.stringify(filme)}`);
  });
  
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
  