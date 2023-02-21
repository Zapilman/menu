import { RootState } from '../../store';

export const getSelectedDishes = (state: RootState) => state.counter.value;
