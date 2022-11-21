import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer/index.js';
import App from './App';

import './index.css';
import './App.css';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxDevTools);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
