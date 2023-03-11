import { axiosInstanse } from './axiosInstanse';

export const restaurantApi = {
  getRestaurant: async () => {
    try {
      const { data } = await axiosInstanse.get(
        '/restaurant/640c8c1f1c27bb22df6b2063',
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
