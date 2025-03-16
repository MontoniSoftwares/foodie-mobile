import axios from "axios";

const api = axios.create({
  baseURL: "https://foodie-jxgjtdqi9-montonisoftwares-projects.vercel.app", // Substitua pelo seu endereço
  timeout: 10000,
});

export default api;
