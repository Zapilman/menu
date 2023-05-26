import axios, { AxiosInstance } from 'axios';

import { IApiService } from './apiService.interface';

class ApiService implements IApiService {
  manager: AxiosInstance;

  constructor() {
    this.manager = axios.create({
      baseURL:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:8080/api'
          : 'https://www.zdorov-front.com/api',
      timeout: 20000,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  async get<T>(url: string) {
    return (await this.manager.get<T>(url)).data;
  }

  async post<T>(url: string, data: any) {
    return (await this.manager.post<T>(url, data)).data;
  }

  put: <T>(url: string, data: any) => Promise<T>;
  delete: <T>(url: string) => Promise<T>;
}
export default new ApiService();
