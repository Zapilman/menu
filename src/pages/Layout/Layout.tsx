import styles from "./Layout.module.scss";
import Header from "_modules/Header/Header";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { useTheme } from "src/context/theme";

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <html data-theme={theme.themeType} />
      </Helmet>
      <Suspense fallback={"loading..."}>
        <div className={styles.wrapper}>
          <Header />
          <main>
            <Outlet context={{ otherKey: 1 }} />
          </main>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
