import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '_UI/Button/Button';
import { MenuSearch } from '_components/Menu';
import { RestaurantDescription, RestaurantInfo } from '_components/Restaurant';

import styles from './MenuActivity.module.scss';

const MenuActivity = () => {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <MenuSearch />
      <RestaurantInfo />
      <Button
        onClick={() => {
          navigate('/feedback');
        }}
        classNames={styles.sendButton}
      >
        {translate('send review')}
      </Button>
      <RestaurantDescription />
    </div>
  );
};

export default MenuActivity;
