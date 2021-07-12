import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.coinstats.app/public/v1/',
});
