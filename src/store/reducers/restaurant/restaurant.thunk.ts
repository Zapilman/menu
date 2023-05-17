import { createAsyncThunk } from '@reduxjs/toolkit';
import { restaurantApi } from 'src/api/restaurantApi';

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const getRestaurant = createAsyncThunk('getRestaurant', () => {
  return restaurantApi.getRestaurant();
});
