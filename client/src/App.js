import './style.css';
import React from 'react';
import RestaurantPreviewPage from './pages/RestaurantPreviewPage/RestaurantPreviewPage';
import { Routes, Route } from 'react-router-dom';
import { Routes as RoutesPath } from './constants/routes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RestaurantMenuPage from './pages/RestaurantMenuPage/RestaurantMenuPage';
import Layout from './pages/Layout/Layout';

const App = () => {
  return (
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
  );
};
export default App;
