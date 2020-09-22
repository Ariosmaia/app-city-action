import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:44398',
  baseURL: 'https://city-action.azurewebsites.net',
});

export default api;
