import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TDish } from 'src/types/Menu';

import type { TSelectedDishesInitialState } from './selectedDishes.types';

const initialState: TSelectedDishesInitialState = {
  selectedDishes: [],
};

export const selectedDishesSlice = createSlice({
  name: 'selectedDishes',
  initialState,
  reducers: {
    toggleSelectedDish: (state, action: PayloadAction<TDish>) => {
      const selectedDishes = current(state.selectedDishes);
      if (selectedDishes.includes(action.payload)) {
        state.selectedDishes = selectedDishes.filter((dish) => {
          console.log(dish._id !== action.payload._id);
          return dish._id !== action.payload._id;
        });
      } else {
        state.selectedDishes.push(action.payload);
      }
    },
  },
});

export const { toggleSelectedDish } = selectedDishesSlice.actions;

export default selectedDishesSlice.reducer;
