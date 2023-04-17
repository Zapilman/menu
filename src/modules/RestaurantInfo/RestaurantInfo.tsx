import React from 'react';

import ContentSection from '../../UI/ContentSection/ContentSection';
import MenuOptions from '../../components/Menu/MenuOptions/MenuOptions';
import AboutRestaurant from '../../components/Restaurant/AboutRestaurant/AboutRestaurant';
import RestaurantHeaderInfo from '../../components/Restaurant/RestaurantHeaderInfo/RestaurantHeaderInfo';
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
