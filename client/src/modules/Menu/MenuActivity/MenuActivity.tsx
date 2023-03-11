import { MenuSearch } from '_components/Menu';
import { RestaurantDescription, RestaurantInfo } from '_components/Restaurant';
import Button from '_UI/Button/Button';

const MenuActivity = () => {
  return (
    <div>
      <MenuSearch />
      <RestaurantInfo />
      <Button>Надіслати відгуки</Button>
      <RestaurantDescription />
    </div>
  );
};

export default MenuActivity;
