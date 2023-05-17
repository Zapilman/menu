import { RootState } from '_store/store';

export const getMenuNavigationSelector = (state: RootState) =>
  state.menu.menu.map((item) => {
    return {
      id: item._id,
      name: item.name,
      categories: item.categories.map((category) => category.name),
    };
  });

export const getCategoryDishesSelector = (state: RootState) => {
  return state.menu.menu.map((item) => item.categories);
};
