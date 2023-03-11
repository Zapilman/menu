import { useQuery } from 'react-query';
import { restaurantApi } from 'src/api/restaurantApi';
import Clock from 'src/assets/icons/Clock';
import { getRestaurantSelector } from '_store/reducers/restaurant/restaurant.select';
import { useAppSelector } from '_store/store';
import ShortInfoCard from '../ShortInfoCard/ShortInfoCard';

const RestaurantInfo = () => {
  const restaurant = useAppSelector(getRestaurantSelector);
  console.log('RestaurantInfo');
  console.log(restaurant.name);
  return (
    <div>
      <span>Інформація про заклад</span>
      <ShortInfoCard
        title="Робочий час:"
        text={restaurant?.name}
        icon={<Clock />}
      />
      <ShortInfoCard title="Адреса:" text={restaurant?._id} icon={<Clock />} />
      <ShortInfoCard title="Телефон" text="asdad" icon={<Clock />} />
    </div>
  );
};

export default RestaurantInfo;
