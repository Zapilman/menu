import { RootState } from '_store/store';

export const getRestaurantSelector = (state: RootState) =>
  state.restaurant.restaurant;
export const getRestaurantStatusSelector = (state: RootState) =>
  state.restaurant.status;
