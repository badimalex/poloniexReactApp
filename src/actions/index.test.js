import * as actions from './index';

describe('actions', () => {
  it('loadTickers', () => {
    const expectedAction = {
      type: actions.LOAD_TICKERS,
      endpoint: '/exchange/ticker'
    };

    expect(actions.loadTickers()).toEqual(expectedAction);
  });

  it('loadTicker', () => {
    const expectedAction = {
      type: actions.LOAD_TICKER,
      endpoint: '/exchange/ticker',
      query: { currencyPair: 'input' }
    };
    const e = {target: { value: 'input' }};

    expect(actions.loadTicker(e)).toEqual(expectedAction);
  });

  it('loadCoins', () => {
    const expectedAction = {
      type: actions.LOAD_COINS,
      endpoint: '/exchange/restrictions'
    };

    expect(actions.loadCoins()).toEqual(expectedAction);
  });
});
