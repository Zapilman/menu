import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { TMenu } from 'src/types/Menu';

import type { TMenuInitialState } from './menu.types';

const initialState: TMenuInitialState = {
  menu: [],
  status: 'idle',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<TMenu[]>) => {
      state.menu = action.payload;
    },
    updateMenu: (state, action: PayloadAction<TMenu>) => {
      state.menu = state.menu.map((menuItem) => {
        if (menuItem._id === action.payload._id) {
          return action.payload;
        }
        return menuItem;
      });
    },
  },
});

export default menuSlice.reducer;
