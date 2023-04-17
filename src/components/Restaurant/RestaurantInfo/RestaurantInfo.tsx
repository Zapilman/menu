import { getRestaurantSelector } from '_store/reducers/restaurant/restaurant.select';
import { useAppSelector } from '_store/store';
import Clock from 'src/assets/icons/Clock';

import ShortInfoCard from '../ShortInfoCard/ShortInfoCard';

const RestaurantInfo = () => {
  const { address, name } = useAppSelector(getRestaurantSelector);

  return (
    <div>
      <span>Інформація про заклад</span>
      <ShortInfoCard title="Робочий час:" text={name} icon={<Clock />} />
      <ShortInfoCard title="Адреса:" text={address} icon={<Clock />} />
      <ShortInfoCard title="Телефон" text="asdad" icon={<Clock />} />
    </div>
  );
};

export default RestaurantInfo;
