import React, { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'App';
import reportWebVitals from 'reportWebVitals';
import store from 'Redux/Store';

import './Styles/index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
