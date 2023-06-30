const fs = require('fs');

const gamesData = fs.readFileSync('games.json');
const games = JSON.parse(gamesData);

games.forEach(game => {
  console.log('ID:', game.id);
  console.log('Título:', game.title);
  console.log('Ano de lançamento:', game.launchYear);
  console.log('Consoles:', game.consoles);
  console.log('Gostei:', game.liked);
  console.log('--------------------------');
});

const newGame = {
  id: 4,
  title: 'The Legend of Zelda: Breath of the Wild',
  launchYear: '2017',
  consoles: ['nintendoSwitch'],
  liked: true
};

games.push(newGame);
const updatedGamesData = JSON.stringify(games, null, 2);
fs.writeFileSync('games.json', updatedGamesData);

console.log('Novo jogo adicionado com sucesso!');
