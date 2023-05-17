import React from 'react';

import Loader from '_UI/Loader/Loader';
import { getCategoryDishesSelector } from '_store/reducers/menu';
import { useAppSelector } from '_store/store';

import DishItem from './DishItem/DishItem';
import styles from './DishesList.module.scss';

const DishesList = () => {
  const dishesList = useAppSelector(getCategoryDishesSelector);

  return (
    <div className={styles.listWrapper}>
      {dishesList.map((list, _) => {
        return list.map((category, index) => {
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
        });
      })}
    </div>
  );
};

export default DishesList;
