import React from 'react';
import PropTypes from 'prop-types';
import Table from './widgets/TickerTable';
import CoinSelect from './widgets/CoinSelect';
import { connect } from 'react-redux';

import { loadTicker } from '../actions';
import { Layout } from 'antd';
const { Content } = Layout;

const contentStyles = { background: '#fff', padding: 24, minHeight: 280 };
const selectStyles = { margin: '24px 0' };

function App(props) {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <h1>Последние изменения на рынке</h1>
        <p>Статистика торгов за последние 24 часа</p>
        <div style={selectStyles}>
          <CoinSelect
            coins={props.coins}
            handleChange={props.loadTicker}
          />
        </div>
        <div style={contentStyles}>
          <Table tickers={props.tickers} />
        </div>
      </Content>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    tickers: state.tickers,
    coins: state.coins
  };
}

App.propTypes = {
  coins: PropTypes.array,
  tickers: PropTypes.array,
  loadTicker: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loadTicker })(App);
