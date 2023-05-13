import { useState } from 'react';
import { useQuery } from 'react-query';

import MenuCollapse from '_components/Menu/MenuCollapse/MenuCollapse';
import { restaurantApi } from 'src/api/restaurantApi';

import styles from './MenuNavigation.module.scss';

const MenuNavigation = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useQuery(
    'restaurantWithMenu',
    restaurantApi.getRestaurantWithMenu,
  );
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.wrapper}>
      {/* {data.menu.map((menuItem) => {
        return (
          <MenuCollapse
            key={menuItem._id}
            open={open}
            headerText={menuItem.name}
            onCollapseHeaderClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        );
      })} */}
    </div>
  );
};

export default MenuNavigation;
