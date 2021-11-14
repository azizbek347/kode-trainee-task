import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './App';
import { StoreContextProvider } from './context';

import reportWebVitals from './reportWebVitals';
import { register } from './serviceWorkerRegistration';

render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
register();