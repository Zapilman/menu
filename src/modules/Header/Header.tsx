import { useLocation, useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import Button from '_UI/Button/Button';
import CenterContainer from '_UI/CenterContainer/CenterContainer';
import LanguageSelect from '_components/LanguageSelect/LanguageSelect';
import RestaurantHeaderInfo from '_components/Restaurant/RestaurantHeaderInfo/RestaurantHeaderInfo';
import { getSelectedDishesCount } from '_store/reducers/selectedDishes/selectedDishes.selects';
import { useAppSelector } from '_store/store';
import classNames from 'classnames';

import styles from './Header.module.scss';
import { LightDarkMode } from './LightDarkMode';

const Header = () => {
  const history = useNavigate();
  const { pathname } = useLocation();
  const count = useAppSelector(getSelectedDishesCount);

  return (
    <header className={styles.header}>
      <CenterContainer>
        <div className={styles.content}>
          <RestaurantHeaderInfo />
          <div className={styles.actions}>
            <LightDarkMode />
            <Button
              onClick={() => {
                history(pathname + '/selected-dishes');
              }}
              disabled={count === 0}
            >
              {count || 'Нічого не вибрано'}
            </Button>
            <LanguageSelect />
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
            Меню
          </NavLink>
          <NavLink
            to={'/feedback'}
            className={({ isActive }) =>
              classNames(styles.headerNavigationLink, {
                [styles.activeLink]: isActive,
              })
            }
          >
            Залишити відгук
          </NavLink>
        </nav>
      </CenterContainer>
    </header>
  );
};

export default Header;
