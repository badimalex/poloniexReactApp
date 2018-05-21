import configureStore from '../store/configureStore';

const initialState = {
  coins: [],
  tickers: [],
  loading: false
};

describe('root reducer', () => {
  it('returns default state', () => {
    expect(configureStore().getState()).toEqual(initialState);
  });
});
