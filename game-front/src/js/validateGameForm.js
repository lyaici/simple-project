import axios from 'axios';
import config from '../config';

const {
  api
} = config;

const createButton = document.getElementById('submit');

createButton.onclick = () => {
  const title = document.getElementById('title');
  const imageLink = document.getElementById('image');
  axios.post(`${api.baseUrl}${api.gamesEndpoint}`, {
    title: title.value,
    image: imageLink.value
  })
  title.value = '';
  imageLink.value = '';
}