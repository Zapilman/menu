import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import MenuCollapse from '_components/Menu/MenuCollapse/MenuCollapse';
import { getMenuNavigationSelector, setMenu } from '_store/reducers/menu';
import { useAppDispatch, useAppSelector } from '_store/store';
import { restaurantApi } from 'src/api/restaurantApi';

import styles from './MenuNavigation.module.scss';

const MenuNavigation = () => {
  const { data, isLoading } = useQuery(
    'restaurantWithMenu',
    restaurantApi.getRestaurantWithMenu,
  );
  const dispatch = useAppDispatch();
  const menuNavigation = useAppSelector(getMenuNavigationSelector);
  const [selectedTab, setSelectedTab] = useState<string>('');

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
            open={selectedTab === menuItem.id}
            headerText={menuItem.name}
            onCollapseHeaderClick={() => {
              setSelectedTab(menuItem.id);
            }}
            categories={menuItem.categories}
          />
        );
      })}
    </div>
  );
};

export default MenuNavigation;
