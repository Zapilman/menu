import React from 'react';
import DishesList from '../../components/DishesList/DishesList';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <MenuNavigation />
      <DishesList />
    </div>
  );
};

export default Menu;
