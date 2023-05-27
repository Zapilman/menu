import { IApiService } from '../apiService.interface';

export class MenuApi {
  service: IApiService;
  route = '/menu';

  constructor(service: IApiService) {
    this.service = service;
  }

  async getMenu<T>(menuId: string) {
    return await this.service.get<T>(this.route + `/${menuId}`);
  }
}
