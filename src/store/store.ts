import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import { menuReducer } from './reducers/menu';
import { restaurantReducer } from './reducers/restaurant';
import { selectedDishesReducer } from './reducers/selectedDishes';

const store = configureStore({
  reducer: {
    selectedDishes: selectedDishesReducer,
    restaurant: restaurantReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
