import axios from "axios";

console.log("API URL =", import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/",
});

export default api;