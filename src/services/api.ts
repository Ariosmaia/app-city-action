import axios from 'axios';
import * as https from 'https';

const api = axios.create({
  // baseURL: 'http://localhost:44398',
  baseURL: 'http://127.0.0.1:5000',
});

export default api;
