import React from 'react';
import PropTypes from 'prop-types';

function CoinSelect(props) {
  return (
    <select
      style={{ width: '100%' }}
      placeholder="Select currency"
      onChange={props.handleChange}
    >
      {
        props.coins.map((value, index) =>
          <option key={index} value={value.currencyPair}>
            {value.currencyPair}
          </option>
        )
      }
    </select>
  );
}

CoinSelect.propTypes = {
  coins: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
};

CoinSelect.defaultProps = {
  coins: []
};

export default CoinSelect;
