import React from 'react';

import { Select } from 'antd';
import PropTypes from 'prop-types';

function CoinSelect(props) {
  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Select currency"
      onChange={props.handleChange}
    >
      {
        props.coins.map((value, index) =>
          <Select.Option key={index} value={value.currencyPair}>
            {value.currencyPair}
          </Select.Option>
        )
      }
    </Select>
  );
}

CoinSelect.propTypes = {
  coins: PropTypes.array,
  handleChange: PropTypes.func.isRequired
};

CoinSelect.defaultProps = {
  coins: []
};

export default CoinSelect;
