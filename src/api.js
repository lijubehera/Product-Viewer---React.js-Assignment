// src/api.js
import axios from 'axios';

export const loginUser = (credentials) => {
  return axios.post('https://dummyjson.com/auth/login', credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getProducts = () => {
  return axios.get('https://dummyjson.com/products');
};
