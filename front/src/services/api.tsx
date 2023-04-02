import axios from 'axios';

const baseUrl = import.meta.env.VITE_REACT_API_URL


const apiCodeBurger = axios.create({
  baseURL: baseUrl,
});

export default apiCodeBurger