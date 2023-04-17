import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../UI/Button/Button';
import ContentSection from '../../../UI/ContentSection/ContentSection';
import styles from './MenuOptions.module.scss';

const MenuOptions = () => {
  return (
    <ContentSection>
      <h2 className={styles.menuTitle}>Розділи меню:</h2>
      <div className={styles.menuOptions}>
        <Link to={'/restaurant/menu'}>
          <Button>Меню</Button>
        </Link>

        <Button>Напої</Button>
      </div>
    </ContentSection>
  );
};

export default MenuOptions;
