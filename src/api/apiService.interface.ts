export interface IApiService {
  manager: any;
  get: <T>(url: string) => Promise<T>;
  post: <T>(url: string, data: any) => Promise<T>;
  put: <T>(url: string, data: any) => Promise<T>;
}
