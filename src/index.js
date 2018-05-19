/* eslint-disable no-console */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

import './styles.css';

store.subscribe(() => {
  console.log('store', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);
