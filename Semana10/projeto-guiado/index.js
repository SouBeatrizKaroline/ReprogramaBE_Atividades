const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/musicas', (req, res) => {

});

app.get('/musicas', (req, res) => {

});

app.get('/musicas/:id', (req, res) => {

});

app.get('/musicas/artistas/:nome', (req, res) => {

});

app.delete('/musicas/:id', (req, res) => {

});

app.put('/musicas/:id', (req, res) => {

});

app.patch('/musicas/:id/favoritar', (req, res) => {

});

app.post('/podcasts', (req, res) => {

});


app.get('/podcasts', (req, res) => {

});


app.get('/podcasts/topico/:topico', (req, res) => {

});

app.delete('/podcasts/:id', (req, res) => {
});

app.patch('/podcasts/:id/nota', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


app.post('/musicas', (req, res) => {
    const novaMusica = req.body;

  
    res.status(201).json({ mensagem: 'Música adicionada com sucesso' });
  });

  app.get('/musicas', (req, res) => {

    res.status(200).json({ musicas: [...listaDeMusicas] }); // Substitua listaDeMusicas pelo array de músicas real
  });
  