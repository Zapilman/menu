import { Outlet } from 'react-router-dom';
import Header from '_modules/Header/Header';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
