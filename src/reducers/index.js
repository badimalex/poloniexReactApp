import { combineReducers } from 'redux';
import { LOAD_TICKERS, LOAD_COINS, LOAD_TICKER, SET_LOADING } from '../actions';

function withKeys(tickers) {
  let i = 0;

  return tickers.reduce((acc, value) => {
    i += 1;
    value['key'] = i;
    acc.push(value);
    return acc;
  }, []);
}

function tickers(state = [], action) {
  switch (action.type) {
    case LOAD_TICKERS:
      return withKeys(action.response.data);
    case LOAD_TICKER:
      return [
        Object.assign(action.response.data, { key: 1 })
      ];
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.value;
    default:
      return state;
  }
}

function coins(state = [], action) {
  switch (action.type) {
    case LOAD_COINS:
      return action.response.data.restrictions;
    default:
      return state;
  }
}

export default combineReducers({
  tickers,
  coins,
  loading
});
