export const LOAD_TICKERS = 'LOAD_TICKERS';
export const LOAD_TICKER = 'LOAD_TICKER';
export const LOAD_COINS = 'LOAD_COINS';
export const SET_LOADING = 'SET_LOADING';

export function loadTickers() {
  return {
    endpoint: '/exchange/ticker',
    type: LOAD_TICKERS,
  };
}

export function loadTicker(e) {
  return {
    endpoint: '/exchange/ticker',
    type: LOAD_TICKER,
    query: { currencyPair: e.target.value }
  };
}

export function loadCoins() {
  return {
    endpoint: '/exchange/restrictions',
    type: LOAD_COINS
  };
}
