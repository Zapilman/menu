import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/api';

export const getRestaurant = createAsyncThunk('getRestaurant', async () => {
  return await API.Restaurant.getRestaurant();
});
