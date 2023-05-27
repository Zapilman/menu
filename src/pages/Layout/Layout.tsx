import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

import Header from '_modules/Header/Header';
import { Sidebar } from '_modules/Sidebar';
import { SidebarProvider } from '_modules/Sidebar/Sidebar.context';
import { useTheme } from 'src/context/theme';

import styles from './Layout.module.scss';

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <html data-theme={theme.themeType} />
      </Helmet>
      <Suspense fallback={'loading...'}>
        <SidebarProvider>
          <div className={styles.wrapper}>
            <Header />
            <main>
              <Outlet context={{ otherKey: 1 }} />
            </main>
            <Sidebar />
          </div>
        </SidebarProvider>
      </Suspense>
    </>
  );
};

export default Layout;
