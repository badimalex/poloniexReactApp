import React from 'react';
import { shallow } from 'enzyme';
import { tickers } from '../../data/fixtures';

import TickerTable from './TickerTable';

let props = {
  loading: false,
  tickers,
};

describe('TickerTable', () => {
  const app = shallow(<TickerTable {...props} />);

  it('render Table', () => {
    expect(app.find('Table').exists()).toBe(true);
  });
});
