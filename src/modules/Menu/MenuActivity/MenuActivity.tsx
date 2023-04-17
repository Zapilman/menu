import Button from '_UI/Button/Button';
import { MenuSearch } from '_components/Menu';
import { RestaurantDescription, RestaurantInfo } from '_components/Restaurant';

import styles from './MenuActivity.module.scss';

const MenuActivity = () => {
  return (
    <div className={styles.wrapper}>
      <MenuSearch />
      <RestaurantInfo />
      <Button>Надіслати відгуки</Button>
      <RestaurantDescription />
    </div>
  );
};

export default MenuActivity;
