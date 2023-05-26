import { TRestaurant } from 'src/types/Restaurant';

import { IApiService } from '../apiService.interface';
import type { TGetRestaurantWithMenuResponse } from './restaurant.types';

export class RestaurantApi {
  service: IApiService;
  route = '/restaurant';

  constructor(service: IApiService) {
    this.service = service;
  }

  async getRestaurant() {
    return await this.service.get<TRestaurant>(
      this.route + '/640c8c1f1c27bb22df6b2063',
    );
  }

  async getRestaurantWithMenu() {
    const restaurant = await this.service.post<TGetRestaurantWithMenuResponse>(
      this.route + '/640c8c1f1c27bb22df6b2063/menu',
      { limit: 5 },
    );
    console.log(
      '🚀 ~ file: restaurant.api.ts:25 ~ RestaurantApi ~ getRestaurantWithMenu ~ restaurant:',
      restaurant,
    );
    return restaurant;
  }
}
