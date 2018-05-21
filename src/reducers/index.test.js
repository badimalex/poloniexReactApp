import rootReducer from './index';
import * as actions from '../actions';
import { tickers, coins, ticker } from '../data/fixtures';

const initialState = {
  coins: [],
  tickers: [],
  loading: false
};

describe('root reducer', () => {
  it('returns the initial state', () => {
    expect(rootReducer({}, {})).toEqual(initialState);
  });

  it('load tickers', () => {
    expect(rootReducer({}, {
      type: actions.LOAD_TICKERS,
      response: {
        data: tickers
      }
    }))
      .toEqual(Object.assign({}, initialState, { tickers }));
  });

  it('load ticker', () => {
    expect(rootReducer({}, {
      type: actions.LOAD_TICKER,
      response: {
        data: ticker
      }
    }))
      .toEqual(Object.assign({}, initialState, { tickers }));
  });

  it('set loading', () => {
    expect(rootReducer({}, {
      type: actions.SET_LOADING,
      value: true
    }))
      .toEqual(Object.assign({}, initialState, { loading: true }));
  });

  it('load coins', () => {
    expect(rootReducer({}, {
      type: actions.LOAD_COINS,
      response: {
        data: {
          restrictions: coins
        }
      }
    }))
      .toEqual(Object.assign({}, initialState, { coins }));
  });
});
