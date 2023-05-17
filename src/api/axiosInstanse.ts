import axios from 'axios';

export const axiosInstanse = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080/api'
      : 'https://www.zdorov-front.com/api',
  timeout: 20000,
  headers: {
    'Content-type': 'application/json',
  },
});
