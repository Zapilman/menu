import ContentSection from '../../UI/ContentSection/ContentSection';

import styles from './RestaurantHeaderInfo.module.scss';

const RestaurantHeaderInfo = () => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.restIconWrapper}>
        <img
          src="https://icons.monobank.com.ua/inf/icon-mdpi/musafir.png"
          alt="Restaurant Icon"
        />
      </div>
      <div className={styles.restInfo}>
        <h2>Musafir | Б. Хмельницького</h2>
        <span>Київ, вул. Богдана Хмельницького, 3Б</span>
      </div>
    </div>
  );
};

export default RestaurantHeaderInfo;
