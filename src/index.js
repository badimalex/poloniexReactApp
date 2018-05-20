/* eslint-disable no-console */

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/App';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadTickers, loadCoins } from './actions';

const store = configureStore();

import './styles.css';

store.subscribe(() => {
  console.log('store', store.getState());
});

store.dispatch(loadTickers());
store.dispatch(loadCoins());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
