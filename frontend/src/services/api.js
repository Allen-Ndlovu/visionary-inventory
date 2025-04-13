import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  timeout: 5000,
});

export const fetchProducts = () => API.get("/products");
export const fetchProduct  = id => API.get(`/products/${id}`);
