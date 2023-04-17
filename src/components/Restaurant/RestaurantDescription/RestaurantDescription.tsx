import { getRestaurantSelector } from '_store/reducers/restaurant/restaurant.select';
import { useAppSelector } from '_store/store';

const RestaurantDescription = () => {
  const { description } = useAppSelector(getRestaurantSelector);
  return <div>{description}</div>;
};

export default RestaurantDescription;
