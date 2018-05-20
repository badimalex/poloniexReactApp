import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { App, mapStateToProps } from './App';

let props = {
  loadTicker: sinon.fake(),
};

describe('App', () => {
  const app = shallow(<App {...props} />);

  it('renders title', () => {
    expect(app.find('h1').text()).toEqual('Последние изменения на рынке');
  });

  it('renders the CoinSelect', () => {
    expect(app.find('CoinSelect').exists()).toBe(true);
  });

  it('renders the TickerTable', () => {
    expect(app.find('TickerTable').exists()).toBe(true);
  });

  it('mapStateToProps has default value', () => {
    const initialState = {
      tickers: [],
      coins: []
    };

    expect(mapStateToProps(initialState)).toEqual(initialState);
  });
});
