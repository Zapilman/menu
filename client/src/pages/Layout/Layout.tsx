import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header/Header';

const Layout = () => {
  return (
    <div style={{ maxHeight: '100vh' }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
