import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, LoginPage, PageNotFoundPage } from 'Pages';
import { Cart } from 'Components';

const browerRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/cart'} element={<Cart />} />
      <Route path={'*'} element={<PageNotFoundPage />} />
    </Routes>
  );
};

export default browerRoutes;
