import React from 'react';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import Table from './widgets/TickerTable';
import CoinSelect from './widgets/CoinSelect';
import { connect } from 'react-redux';
import { loadTicker } from '../actions';

import { Layout } from 'antd';
const { Content } = Layout;

const contentStyles = { background: '#fff', padding: 24, minHeight: 280 };
const selectStyles = { margin: '24px 0' };

export function App(props) {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <h1>Последние изменения на рынке</h1>
        <p>Статистика торгов за последние 24 часа</p>
        <div style={selectStyles}>
          <CoinSelect
            toggleLoading={() => {}}
            coins={props.coins}
            handleChange={props.loadTicker}
          />
        </div>
        <div style={contentStyles}>
          <Table
            loading={props.loading}
            tickers={props.tickers}
          />
        </div>
      </Content>
    </Layout>
  );
}

export function mapStateToProps(state) {
  return {
    tickers: state.tickers,
    loading: state.loading,
    coins: state.coins
  };
}

App.defaultProps = {
  coins: [],
  tickers: []
};

App.propTypes = {
  coins: PropTypes.array,
  tickers: PropTypes.array,
  loading: PropTypes.bool,
  loadTicker: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators({ loadTicker }, dispatch)
)(App);
