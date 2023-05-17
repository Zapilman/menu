import { useNavigate } from 'react-router';

import { OverlayingPopup } from '_UI/OverlayingPopup';
import DishItem from '_modules/Menu/DishesList/DishItem/DishItem';
import {
  getSelectedDishes,
  getSelectedDishesCount,
} from '_store/reducers/selectedDishes/selectedDishes.selects';
import { useAppSelector } from '_store/store';

import styles from './SelectedDishes.module.scss';

const SelectedDishes = () => {
  const navigate = useNavigate();
  const countSelected = useAppSelector(getSelectedDishesCount);
  const selectedDishes = useAppSelector(getSelectedDishes);

  return (
    <OverlayingPopup
      onClose={() => {
        navigate(-1);
      }}
      isOpen
    >
      <div className={styles.container}>
        <span>selected dishes: {countSelected}</span>
        <div>
          {selectedDishes.map((dish) => {
            return <DishItem dish={dish} key={dish._id} />;
          })}
        </div>
      </div>
    </OverlayingPopup>
  );
};

export default SelectedDishes;
