import React from 'react';

import CenterContainer from '_UI/CenterContainer/CenterContainer';
import LanguageSelect from '_components/LanguageSelect/LanguageSelect';
import RestaurantInfo from '_modules/RestaurantInfo/RestaurantInfo';

import styles from './RestaurantPreviewPage.module.scss';

const RestaurantPreviewPage = () => {
  return (
    <CenterContainer>
      <div className={styles.languageSelectWrapper}>
        <LanguageSelect />
      </div>
      <RestaurantInfo />
    </CenterContainer>
  );
};

export default RestaurantPreviewPage;
