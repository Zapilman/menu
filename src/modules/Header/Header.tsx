import LanguageSelect from '_components/LanguageSelect/LanguageSelect';
import RestaurantHeaderInfo from '_components/Restaurant/RestaurantHeaderInfo/RestaurantHeaderInfo';

import { getSelectedDishes } from '_store/reducers/selectedDishes';
import { useAppSelector } from '_store/store';

import Button from '_UI/Button/Button';
import CenterContainer from '_UI/CenterContainer/CenterContainer';

import styles from './Header.module.scss';
import { LightDarkMode } from './LightDarkMode';

const Header = () => {
  const count = useAppSelector(getSelectedDishes);
  return (
    <header className={styles.header}>
      <CenterContainer className={styles.header__content}>
        <RestaurantHeaderInfo />
        <div className={styles.actions}>
          <LightDarkMode />
          <Button disabled>{count || 'Нічого не вибрано'}</Button>
          <LanguageSelect />
        </div>
      </CenterContainer>
    </header>
  );
};

export default Header;
