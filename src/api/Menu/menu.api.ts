import { IApiService } from '../apiService.interface';

export class MenuApi {
  service: IApiService;
  route = '/restaurant';

  constructor(service: IApiService) {
    this.service = service;
  }

  async getMenu() {
    return await this.service.get<any>(this.route + '640c8c1f1c27bb22df6b2063');
  }
}
