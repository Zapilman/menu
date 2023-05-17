import React, { useState } from 'react';

import Button from '_UI/Button/Button';
import { toggleSelectedDish } from '_store/reducers/selectedDishes';
import { useAppDispatch } from '_store/store';
import cn from 'classnames';
import { TDish } from 'src/types/Menu';

import styles from './DishItem.module.scss';

const DishItem = ({ dish }: { dish: TDish }) => {
  const [showFull, setShowFull] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.dishWrapper}>
      <div className={cn(styles.dish, { [styles.dish_full]: showFull })}>
        <div
          className={styles.dishInfo}
          onClick={() => {
            setShowFull((prev) => !prev);
          }}
        >
          <h4>{dish.name}</h4>
          <p>{dish.description}</p>
          <span>{dish.weight} г</span>
        </div>
        <Button
          onClick={() => {
            dispatch(toggleSelectedDish(dish));
          }}
        >
          {dish.price} ₴
        </Button>
      </div>
      <img
        className={cn(styles.dishImage, { [styles.dishImage_full]: showFull })}
        onClick={() => {
          setShowFull((prev) => !prev);
        }}
        src={dish.photo}
        alt={dish.name}
      />
    </div>
  );
};

export default DishItem;
