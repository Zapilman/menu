import axios from 'axios';

export const axiosInstanse = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 20000,
  headers: {
    'Content-type': 'application/json',
  },
});
