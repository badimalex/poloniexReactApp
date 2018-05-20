import React from 'react';
import { shallow } from 'enzyme';
import { coins } from '../../data/fixtures';
import sinon from 'sinon';

import CoinSelect from './CoinSelect';

let props = {
  coins,
  handleChange: sinon.fake()
};

describe('CoinSelect', () => {
  const app = shallow(<CoinSelect {...props} />);

  it('has options', () => {
    expect(app.find('option').length).toBe(2);
  });

  it('should call onChange with shallow', () => {
    const onChange = sinon.spy();

    props = {
      ...props,
      handleChange: onChange
    };

    const wrapper = shallow(<CoinSelect { ...props } />);
    wrapper.simulate('change');
    expect(onChange.called).toBe(true);
  });
});
