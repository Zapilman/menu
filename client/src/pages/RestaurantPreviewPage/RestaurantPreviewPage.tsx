import React from 'react';
import { useParams } from 'react-router-dom';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import RestaurantInfo from '../../modules/RestaurantInfo/RestaurantInfo';
import CenterContainer from '../../UI/CenterContainer/CenterContainer';

import styles from './RestaurantPreviewPage.module.scss';

const RestaurantPreviewPage = () => {
  const { id } = useParams();

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
