const fs = require('fs');

function lerArquivoJSON(nomeArquivo) {
  const data = fs.readFileSync(nomeArquivo);
  return JSON.parse(data);
}

function escreverArquivoJSON(nomeArquivo, data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(nomeArquivo, jsonData);
}

function cadastrarSerie(serie) {
  const series = lerArquivoJSON('series.json');
  series.push(serie);
  escreverArquivoJSON('series.json', series);
  console.log('Série cadastrada com sucesso!');
}

function cadastrarTemporada(nomeSerie, temporada) {
  const series = lerArquivoJSON('series.json');
  const serieEncontrada = series.find(serie => serie.name === nomeSerie);
  if (!serieEncontrada) {
    console.log('Série não encontrada.');
    return;
  }
  serieEncontrada.seasons.push(temporada);
  escreverArquivoJSON('series.json', series);
  console.log('Temporada cadastrada com sucesso!');
}

function cadastrarEpisodio(nomeSerie, codigoTemporada, episodio) {
  const series = lerArquivoJSON('series.json');
  const serieEncontrada = series.find(serie => serie.name === nomeSerie);
  if (!serieEncontrada) {
    console.log('Série não encontrada.');
    return;
  }
  const temporadaEncontrada = serieEncontrada.seasons.find(temporada => temporada.code === codigoTemporada);
  if (!temporadaEncontrada) {
    console.log('Temporada não encontrada.');
    return;
  }
  temporadaEncontrada.episodes.push(episodio);
  escreverArquivoJSON('series.json', series);
  console.log('Episódio cadastrado com sucesso!');
}

const novaSerie = {
  id: 3,
  name: 'Stranger Things',
  genre: 'Suspense',
  synopsis: 'Uma série que mistura suspense, ficção científica e aventura, situada nos anos 80.',
  liked: true,
  seasons: [
    {
      id: 1,
      code: 'season01',
      episodes: [
        {
          id: 1,
          code: 'ep01',
          name: 'The Vanishing of Will Byers',
          watched: true
        },
        {
          id: 2,
          code: 'ep02',
          name: 'The Weirdo on Maple Street',
          watched: false
        }
      ]
    }
  ]
};

cadastrarSerie(novaSerie);

const novaTemporada = {
  id: 2,
  code: 'season02',
  episodes: [
    {
      id: 1,
      code: 'ep01',
      name: 'The Pollywog',
      watched: false
    },
    {
      id: 2,
      code: 'ep02',
      name: 'The Lost Sister',
      watched: false
    }
  ]
};

cadastrarTemporada('Stranger Things', novaTemporada);

const novoEpisodio = {
  id: 3,
  code: 'ep03',
  name: 'The Mind Flayer',
  watched: false
};

cadastrarEpisodio('Stranger Things', 'season02', novoEpisodio);
