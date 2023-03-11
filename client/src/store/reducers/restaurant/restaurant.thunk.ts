import { createAsyncThunk } from '@reduxjs/toolkit';
import { restaurantApi } from 'src/api/restaurantApi';

export const getRestaurant = createAsyncThunk('asda', () => {
  return restaurantApi.getRestaurant();
});
