import { menuSlice } from './menu.reducer';

export { default as menuReducer } from './menu.reducer';

export {
  getCategoryDishesSelector,
  getMenuNavigationSelector,
} from './menu.select';

export const { setMenu, updateMenu } = menuSlice.actions;
