import { useEffect } from 'react';
import { useQuery } from 'react-query';

import MenuCollapse from '_components/Menu/MenuCollapse/MenuCollapse';
import {
  getMenuNavigationSelector,
  setMenu,
  updateMenu,
} from '_store/reducers/menu';
import { getMenuSelector } from '_store/reducers/menu/menu.select';
import { useAppDispatch, useAppSelector } from '_store/store';
import API from 'src/api';
import { restaurantApi } from 'src/api/restaurantApi';
import { useSearchParam } from 'src/hooks/useSearchParam';
import { TMenu } from 'src/types/Menu';

import styles from './MenuNavigation.module.scss';

const MenuNavigation = () => {
  const { data, isLoading } = useQuery(
    'restaurantWithMenu',
    restaurantApi.getRestaurantWithMenu,
  );
  const dispatch = useAppDispatch();
  const menuNavigation = useAppSelector(getMenuNavigationSelector);
  const section = useSearchParam('section');
  const activeMenu = useAppSelector(getMenuSelector(section));

  useEffect(() => {
    (async () => {
      if (!activeMenu.categories) {
        const fullMenu = await API.Menu.getMenu<TMenu>(activeMenu._id);
        dispatch(updateMenu(fullMenu));
      }
    })();
  }, [section, activeMenu]);

  useEffect(() => {
    if (data) {
      dispatch(setMenu(data.menu));
    }
  }, [data]);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.wrapper}>
      <span>Меню:</span>
      {menuNavigation.map((menuItem) => {
        return (
          <MenuCollapse
            key={menuItem.id}
            headerText={menuItem.name}
            categories={activeMenu?.categories}
          />
        );
      })}
    </div>
  );
};

export default MenuNavigation;
