import { Outlet } from 'react-router-dom';
import Header from '_modules/Header/Header';

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet context={{ otherKey: 1 }} />
      </main>
    </div>
  );
};

export default Layout;
