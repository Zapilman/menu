import { RootState } from '../../store';

export const getSelectedDishesCount = (state: RootState) =>
  state.selectedDishes.selectedDishes.length;

export const getSelectedDishes = (state: RootState) =>
  state.selectedDishes.selectedDishes;
