import { createSlice } from '@reduxjs/toolkit';

import { getRestaurant } from './restaurant.thunk';
import type { TRestaurantInitialState } from './restaurant.types';

const initialState: TRestaurantInitialState = {
  restaurant: null,
  status: 'idle',
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurant.fulfilled, (state, action) => {
      state.restaurant = action.payload;
      state.status = 'succeeded';
    });
    builder.addCase(getRestaurant.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export default restaurantSlice.reducer;
