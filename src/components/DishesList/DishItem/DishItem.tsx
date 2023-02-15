import React, { useState } from 'react';
import Button from '../../../UI/Button/Button';
import cn from 'classnames';

import styles from './DishItem.module.scss';

const DishItem = () => {
  const [showFull, setShowFull] = useState<boolean>(false);

  return (
    <div className={styles.dishWrapper}>
      <div className={cn(styles.dish, { [styles.dish_full]: showFull })}>
        <div
          className={styles.dishInfo}
          onClick={() => {
            setShowFull((prev) => !prev);
          }}
        >
          <h4>
            Один чебурек з яловичиною (або бараниною, сиром, грибами, тощо)
          </h4>
          <p>
            Чебурек з яловичиною (або бараниною, бринзою, сиром, грибами).
            Подається з йогуртовим соусом
          </p>
          <span>110 г</span>
        </div>
        <Button>53 ₴</Button>
      </div>
      <img
        className={cn(styles.dishImage, { [styles.dishImage_full]: showFull })}
        onClick={() => {
          setShowFull((prev) => !prev);
        }}
        src="https://docs-s2p.s3.eu-west-1.amazonaws.com/menu-prod/dish-34246.jpg?t=1661882834921"
        alt="Один чебурек з яловичиною (або бараниною, сиром, грибами, тощо)"
      />
    </div>
  );
};

export default DishItem;
