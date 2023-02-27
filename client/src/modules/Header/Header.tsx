import React from 'react';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import RestaurantHeaderInfo from '../../components/RestaurantHeaderInfo/RestaurantHeaderInfo';
import { getSelectedDishes } from '../../store/reducers/selectedDishes';
import { useAppSelector } from '../../store/store';
import Button from '../../UI/Button/Button';
import CenterContainer from '../../UI/CenterContainer/CenterContainer';

import styles from './Header.module.scss';

const Header = () => {
  const count = useAppSelector(getSelectedDishes);
  return (
    <header className={styles.header}>
      <CenterContainer className={styles.header__content}>
        <RestaurantHeaderInfo />
        <div className={styles.actions}>
          <Button disabled>{count || 'Нічого не вибрано'}</Button>
          <LanguageSelect />
        </div>
      </CenterContainer>
    </header>
  );
};

export default Header;
