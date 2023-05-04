import React from 'react';

import ContentSection from '_UI/ContentSection/ContentSection';
import { MenuOptions } from '_components/Menu';
import { AboutRestaurant, RestaurantHeaderInfo } from '_components/Restaurant';

import styles from './RestaurantInfo.module.scss';

const RestaurantInfo = () => {
  return (
    <div className={styles.wrapper}>
      <ContentSection>
        <RestaurantHeaderInfo />
      </ContentSection>
      <div className={styles.info}>
        <MenuOptions />
        <AboutRestaurant />
      </div>
    </div>
  );
};

export default RestaurantInfo;
