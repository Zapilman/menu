import axios from 'axios';

export const axiosInstanse = axios.create({
  baseURL: '127.0.0.1:8080/api',
  timeout: 20000,
  headers: {
    'Content-type': 'application/json',
  },
});
