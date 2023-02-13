import React from 'react';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import RestaurantHeaderInfo from '../../components/RestaurantHeaderInfo/RestaurantHeaderInfo';
import Button from '../../UI/Button/Button';
import CenterContainer from '../../UI/CenterContainer/CenterContainer';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <CenterContainer className={styles.header__content}>
        <RestaurantHeaderInfo />
        <div className={styles.actions}>
          <Button disabled>Нічого не вибрано</Button>
          <LanguageSelect />
        </div>
      </CenterContainer>
    </header>
  );
};

export default Header;
