import React from 'react';

import Loader from '_UI/Loader/Loader';
import { getCategoryDishesSelector } from '_store/reducers/menu';
import { getMenuSelector } from '_store/reducers/menu/menu.select';
import { useAppSelector } from '_store/store';
import { useSearchParam } from 'src/hooks/useSearchParam';

import DishItem from './DishItem/DishItem';
import styles from './DishesList.module.scss';

const DishesList = () => {
  // const dishesList = useAppSelector(getCategoryDishesSelector);
  const section = useSearchParam('section');
  const activeMenu = useAppSelector(getMenuSelector(section));

  return (
    <div className={styles.listWrapper}>
      {activeMenu?.categories?.map((category, index) => {
        return (
          <div className={styles.listWrapper} key={index} id={category.name}>
            <h3 className={styles.listTitle}>{category.name}</h3>
            <div className={styles.list}>
              {category.dishes.map((dish, indexq) => {
                return (
                  <div
                    className={styles.dishWrapper}
                    id={indexq.toString()}
                    key={indexq}
                  >
                    <DishItem dish={dish} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DishesList;
