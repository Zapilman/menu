import { TRestaurant } from '../types/Restaurant';
import { axiosInstanse } from './axiosInstanse';

interface TGetRestaurantWithMenuResponse {
  _id: string;
  name: string;
  menu: Array<{ _id: string; name: string }>;
}

export const restaurantApi = {
  getRestaurant: async () => {
    try {
      const { data } = await axiosInstanse.get<TRestaurant>(
        '/restaurant/640c8c1f1c27bb22df6b2063',
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  getRestaurantWithMenu: async () => {
    try {
      const { data } = await axiosInstanse.post<TGetRestaurantWithMenuResponse>(
        '/restaurant/640c8c1f1c27bb22df6b2063/menu',
        { limit: 5 },
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
