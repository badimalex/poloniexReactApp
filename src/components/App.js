import React from 'react';
import PropTypes from 'prop-types';
import Table from './widgets/TickerTable';
import CoinSelect from './widgets/CoinSelect';
import { connect } from 'react-redux';

import { loadTicker, loadTickers, loadCoins } from '../actions';
import { Layout } from 'antd';
const { Content } = Layout;

const contentStyles = { background: '#fff', padding: 24, minHeight: 280 };
const selectStyles = { margin: '24px 0' };

class App extends React.PureComponent {
  state = {
    loading: true
  };

  componentDidMount = () => {
    Promise.all([
      this.props.loadTickers(),
      this.props.loadCoins()
    ]).then(() => {
      this.toggleLoading(false);
    });
  };

  toggleLoading = (loading) => {
    this.setState({
      loading
    });
  };

  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Content style={{ padding: '0 50px' }}>
          <h1>Последние изменения на рынке</h1>
          <p>Статистика торгов за последние 24 часа</p>
          <div style={selectStyles}>
            <CoinSelect
              toggleLoading={this.toggleLoading}
              coins={this.props.coins}
              handleChange={this.props.loadTicker}
            />
          </div>
          <div style={contentStyles}>
            <Table
              loading={this.state.loading}
              tickers={this.props.tickers}
            />
          </div>
        </Content>
      </Layout>
    );
  }
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
  loadTicker: PropTypes.func.isRequired,
  loadTickers: PropTypes.func.isRequired,
  loadCoins: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { loadTicker, loadTickers, loadCoins })(App);
