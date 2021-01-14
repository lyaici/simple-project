import axios from 'axios';
import config from '../config';

const {
  api
} = config;

const createCard = (title, imageLink) => {
  const gameCard = document.createElement('div');
  const img = document.createElement('img');
  const titleContainer = document.createElement('div');
  const h2 = document.createElement('h2');
  gameCard.classList.add('game-card');
  titleContainer.classList.add('title');
  img.classList.add('cover');
  img.src = imageLink;
  h2.classList.add('fency');
  h2.innerText = title;
  titleContainer.appendChild(h2);
  gameCard.appendChild(img);
  gameCard.appendChild(titleContainer);
  return gameCard;
}

const loadGameList = async () => {
  const gameList = document.getElementById('game-list');
  try {
    const {
      data
    } = await axios.get(`${api.baseUrl}${api.gamesEndpoint}`);
    data.forEach(game => {
      const card = createCard(game.title, game.image);
      gameList.appendChild(card);
    })
  } catch {
    const noResult = document.createElement('h2');
    noResult.classList.add('fency');
    noResult.innerText = 'No Result found :( '
    gameList.appendChild(noResult);
  }
}

loadGameList();