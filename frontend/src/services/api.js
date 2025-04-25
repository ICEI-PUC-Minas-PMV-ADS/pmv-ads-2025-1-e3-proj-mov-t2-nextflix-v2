import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // depois vamos confirmar esse endereço com seu colega
});
