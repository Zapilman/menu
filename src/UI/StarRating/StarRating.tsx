import React, { useState } from 'react';

import Star from 'src/assets/icons/Star';

import styles from './StarRating.module.scss';

const StarRating = ({ onChange }: { onChange?: (value: number) => void }) => {
  const [rating, setRating] = useState<number>(0);
  return (
    <div className={styles.wrapper}>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              setRating(index);
              onChange?.(index);
            }}
            className={index <= rating ? styles.filled : styles.empty}
          >
            <Star />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
