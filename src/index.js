import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { Provider } from 'react-redux';
import { store } from './redux/app/store.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);

serviceWorkerRegistration.register();
