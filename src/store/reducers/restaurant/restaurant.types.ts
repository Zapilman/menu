import { TRestaurant } from 'src/types/Restaurant';

export interface TRestaurantInitialState {
  restaurant: TRestaurant | null;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
