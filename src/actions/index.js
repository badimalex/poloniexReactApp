/* eslint-disable no-console */

export const LOAD_TICKERS = 'LOAD_TICKERS';
export const LOAD_TICKER = 'LOAD_TICKER';
export const LOAD_COINS = 'LOAD_COINS';

export const loadTickers = () => async (dispatch, getState, api) => {
  const tickers = await api.get('/exchange/ticker');

  dispatch({
    type: LOAD_TICKERS,
    tickers
  });
};

export const loadTicker = (currencyPair) => async (dispatch, getState, api) => {
  const ticker = await api.get('/exchange/ticker', {
    params: { currencyPair }
  });

  dispatch({
    type: LOAD_TICKER,
    ticker
  });
};

export const loadCoins = () => async (dispatch, getState, api) => {
  const coins = await api.get('/exchange/restrictions');

  dispatch({
    type: LOAD_COINS,
    coins
  });
};
