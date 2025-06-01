import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:5000/api', // IP local da sua máquina
  timeout: 10000, // opcional: evita travamento em chamadas lentas
});

export default api;
