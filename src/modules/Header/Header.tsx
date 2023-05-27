import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

import Button from '_UI/Button/Button';
import CenterContainer from '_UI/CenterContainer/CenterContainer';
import LanguageSelect from '_components/LanguageSelect/LanguageSelect';
import RestaurantHeaderInfo from '_components/Restaurant/RestaurantHeaderInfo/RestaurantHeaderInfo';
import { getSelectedDishesCount } from '_store/reducers/selectedDishes/selectedDishes.selects';
import { useAppSelector } from '_store/store';
import classNames from 'classnames';

import BurgerMenuButton from './BurgerMenuButton/BurgerMenuButton';
import styles from './Header.module.scss';
import { LightDarkMode } from './LightDarkMode';

const Header = () => {
  const history = useNavigate();
  const { pathname, search } = useLocation();
  const count = useAppSelector(getSelectedDishesCount);
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <CenterContainer>
        <div className={styles.content}>
          <RestaurantHeaderInfo />
          <div className={styles.actions}>
            <LightDarkMode />
            <Button
              onClick={() => {
                history(pathname + '/selected-dishes' + search);
              }}
              disabled={count === 0}
            >
              {count || 'Нічого не вибрано'}
            </Button>
            <LanguageSelect />
            <BurgerMenuButton />
          </div>
        </div>

        <nav className={styles.headerNavigation}>
          <NavLink
            to={'/restaurant/menu'}
            className={({ isActive }) =>
              classNames(styles.headerNavigationLink, {
                [styles.activeLink]: isActive,
              })
            }
          >
            {t('menu')}
          </NavLink>
          <NavLink
            to={'/feedback'}
            className={({ isActive }) =>
              classNames(styles.headerNavigationLink, {
                [styles.activeLink]: isActive,
              })
            }
          >
            {t('sendFeedBack')}
          </NavLink>
        </nav>
      </CenterContainer>
    </header>
  );
};

export default Header;
