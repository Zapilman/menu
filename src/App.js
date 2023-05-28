import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'src/pages/Layout/Layout';
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage';
import RestaurantPreviewPage from 'src/pages/RestaurantPreviewPage/RestaurantPreviewPage';

import '../i18n';
import { Routes as RoutesPath } from './constants/routes';
import { useTheme } from './context/theme';
import './styles/style.css';

const RestaurantMenuPage = React.lazy(() =>
  import('src/pages/RestaurantMenuPage/RestaurantMenuPage'),
);
const FeedBackPage = React.lazy(() =>
  import('src/pages/FeedBackPage/FeedBackPage'),
);

const App = () => {
  const theme = useTheme();
  return (
    <div style={{ ...theme }}>
      <Routes>
        <Route path={RoutesPath.MAIN} element={<NotFoundPage />} />

        <Route element={<Layout />}>
          <Route
            path={RoutesPath.RESTAURANT_MENU}
            element={<RestaurantMenuPage />}
          />
          <Route path={RoutesPath.FEEDBACK} element={<FeedBackPage />} />
        </Route>

        <Route
          path={RoutesPath.RESTAURANT_PREVIEW}
          element={<RestaurantPreviewPage />}
        />
        <Route path={RoutesPath.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
