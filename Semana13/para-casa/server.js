const express = require('express');
const mongoose = require('mongoose');
const gameController = require('./controllers/gameController');
const consoleController = require('./controllers/consoleController');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/nome_do_seu_banco_de_dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conectado ao banco de dados MongoDB');
})
.catch(err => {
  console.error('Erro ao conectar-se ao banco de dados MongoDB:', err);
  process.exit(1);
});

app.get('/games', gameController.findGameByName);
app.get('/consoles', consoleController.findConsoleByAvailability);
app.post('/games', gameController.createGame);
app.post('/consoles', consoleController.createConsole);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
