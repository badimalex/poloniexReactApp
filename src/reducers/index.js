import { combineReducers } from 'redux';
import { LOAD_TICKERS, LOAD_COINS, LOAD_TICKER } from '../actions';

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
      return withKeys(action.tickers.data);
    case LOAD_TICKER:
      return [
        Object.assign(action.ticker.data, { key: 1 })
      ];
    default:
      return state;
  }
}

function coins(state = [], action) {
  switch (action.type) {
    case LOAD_COINS:
      return action.coins.data.restrictions;
    default:
      return state;
  }
}

export default combineReducers({
  tickers,
  coins
});
