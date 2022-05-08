import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from 'Components';
import Routes from 'routes';

import './Styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
