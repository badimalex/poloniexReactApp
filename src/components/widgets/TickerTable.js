import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const columns = [
  {
    title: 'Currency',
    dataIndex: 'cur',
    key: 'cur',
  },
  {
    title: 'Best ask',
    dataIndex: 'best_ask',
    key: 'best_ask',
  },
  {
    title: 'Best bid',
    dataIndex: 'best_bid',
    key: 'best_bid',
  },
  {
    title: 'High',
    dataIndex: 'high',
    key: 'high',
  },
  {
    title: 'Last',
    dataIndex: 'last',
    key: 'last',
  },
  {
    title: 'Low',
    dataIndex: 'low',
    key: 'low',
  },
  {
    title: 'Max bid',
    dataIndex: 'max_bid',
    key: 'max_bid',
  },
  {
    title: 'Min ask',
    dataIndex: 'min_ask',
    key: 'min_ask',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Vwap',
    dataIndex: 'vwap',
    key: 'vwap',
  },
];

function TickerTable(props) {
  return (
    <Table
      loading={props.loading}
      dataSource={props.tickers}
      columns={columns}
    />
  );
}

TickerTable.propTypes = {
  loading: PropTypes.bool,
  tickers: PropTypes.array
};

TickerTable.defaultProps = {
  tickers: []
};

export default TickerTable;
