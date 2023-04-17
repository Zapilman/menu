import React from 'react';

import DishItem from './DishItem/DishItem';
import styles from './DishesList.module.scss';

const DishesList = () => {
  const array = new Array(12).fill(0);
  const arrayDish = new Array(14).fill(0);
  return (
    <div className={styles.listWrapper}>
      {array.map((_, index) => {
        return (
          <div key={index}>
            <h3>Чебуреки</h3>
            {arrayDish.map((_, indexq) => {
              return <DishItem key={indexq} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DishesList;
