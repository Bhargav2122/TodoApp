// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todoapp-backend-palq.onrender.com/api',
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default api;
