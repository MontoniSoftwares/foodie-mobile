import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.103:3001",
    //baseURL: "http://ip-do-seu-pc-aqui:3001",
    timeout: 10000
});

export default api;