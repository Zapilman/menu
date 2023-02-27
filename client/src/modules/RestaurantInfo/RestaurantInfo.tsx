import React from 'react';
import AboutRestaurant from '../../components/AboutRestaurant/AboutRestaurant';
import MenuOptions from '../../components/MenuOptions/MenuOptions';
import RestaurantHeaderInfo from '../../components/RestaurantHeaderInfo/RestaurantHeaderInfo';
import ContentSection from '../../UI/ContentSection/ContentSection';

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
