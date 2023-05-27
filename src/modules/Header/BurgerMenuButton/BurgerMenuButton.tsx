import React from 'react';

import Button from '_UI/Button/Button';
import { useSidebar } from '_modules/Sidebar/Sidebar.context';

import styles from './BurgerMenuButton.module.scss';

const BurgerMenuButton = () => {
  const { setOpen } = useSidebar();
  return (
    <Button
      onClick={() => {
        setOpen(true);
      }}
      classNames={styles.buttonWrapper}
    >
      <div className={styles.burger}>
        <div className={styles.dash} />
        <div className={styles.dash} />
        <div className={styles.dash} />
      </div>
    </Button>
  );
};

export default BurgerMenuButton;
