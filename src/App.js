import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Routes as RoutesPath } from './constants/routes';
import { useTheme } from './context/theme';
import Layout from './pages/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestaurantPreviewPage from './pages/RestaurantPreviewPage/RestaurantPreviewPage';
import './styles/style.css';

const RestaurantMenuPage = React.lazy(() =>
  import('./pages/RestaurantMenuPage/RestaurantMenuPage'),
);

// if (matchMedia('(prefers-color-scheme: dark)').matches === true) {
//   console.log('dark');
//   require('./styles/dark.css');
// } else {
//   console.log('light');
//   require('./styles/light.css');
// }

const App = () => {
  const theme = useTheme();
  return (
    <div style={{ ...theme }}>
      <Routes>
        <Route path={RoutesPath.MAIN} element={<NotFoundPage />} />
        <Route
          path={RoutesPath.RESTAURANT_PREVIEW}
          element={<RestaurantPreviewPage />}
        />
        <Route path={RoutesPath.RESTAURANT_MENU} element={<Layout />}>
          <Route index element={<RestaurantMenuPage />} />
        </Route>
        <Route path={RoutesPath.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
