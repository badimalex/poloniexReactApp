/* eslint-disable no-console */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadTickers, loadCoins } from './actions';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

import 'antd/dist/antd.css';

store.subscribe(() => {
  console.log('store', store.getState());
});

store.dispatch(loadTickers());
store.dispatch(loadCoins());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
