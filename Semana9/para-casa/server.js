const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const moviesData = JSON.parse(fs.readFileSync('ghiblifilm.json', 'utf8'));

app.patch('/movies/:id/director', (req, res) => {
  const movieId = req.params.id;
  const director = req.body.director;

  const movie = moviesData.find(movie => movie.id === movieId);

  if (movie) {
    movie.director = director;
    res.send('Campo "director" atualizado com sucesso.');
  } else {
    res.status(404).send('Filme não encontrado.');
  }
});

app.patch('/movies/:id/running_time', (req, res) => {
  const movieId = req.params.id;
  const runningTime = req.body.running_time;

  const movie = moviesData.find(movie => movie.id === movieId);

  if (movie) {
    movie.running_time = runningTime;
    res.send('Campo "running_time" atualizado com sucesso.');
  } else {
    res.status(404).send('Filme não encontrado.');
  }
});

app.put('/movies/:id/description', (req, res) => {
  const movieId = req.params.id;
  const description = req.body.description;

  const movie = moviesData.find(movie => movie.id === movieId);

  if (movie) {
    movie.description = description;
    res.send('Descrição atualizada com sucesso.');
  } else {
    res.status(404).send('Filme não encontrado.');
  }
});

app.delete('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  const movieIndex = moviesData.findIndex(movie => movie.id === movieId);

  if (movieIndex !== -1) {
    moviesData.splice(movieIndex, 1);
    res.send('Filme excluído com sucesso.');
  } else {
    res.status(404).send('Filme não encontrado.');
  }
});

app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  const movie = moviesData.find(movie => movie.id === movieId);

  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send('Filme não encontrado.');
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
