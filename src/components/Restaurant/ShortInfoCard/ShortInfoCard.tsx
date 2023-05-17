import React, { FC } from 'react';

import styles from './ShortInfoCard.module.scss';
import type { IShortInfoCardProps } from './ShortInfoCard.types';

const ShortInfoCard: FC<IShortInfoCardProps> = ({ title, text, icon }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <span>{title}</span>
        <h6>{text}</h6>
      </div>
    </div>
  );
};

export default ShortInfoCard;
