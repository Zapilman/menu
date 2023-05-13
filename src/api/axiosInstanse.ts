import axios from 'axios';

export const axiosInstanse = axios.create({
  baseURL: 'https://www.zdorov-front.com/api',
  timeout: 20000,
  headers: {
    'Content-type': 'application/json',
  },
});
