import { TRestaurant } from 'src/types/Restaurant';

export type TRestaurantInitialState = {
  restaurant: TRestaurant | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};
