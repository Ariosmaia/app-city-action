import axios from 'axios';

const api = axios.create({
  // baseURL: 'hrrp://localhost:3333',
  baseURL: 'http://192.168.15.43:44398',
});

export default api;
