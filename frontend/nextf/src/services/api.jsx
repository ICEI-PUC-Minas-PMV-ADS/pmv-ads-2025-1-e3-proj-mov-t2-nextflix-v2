import axios from 'axios';

// Usa o endereço especial 10.0.2.2 e a porta correta 5075.
const API_URL = 'http://10.0.2.2:5075/api';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
