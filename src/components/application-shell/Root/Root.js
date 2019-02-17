import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { shape } from 'prop-types';
import App from './App';

class Root extends Component {
  componentWillUnmount() {
    this.props.store.dispatch({ type: 'RESET_STORE' });
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/:name" component={App} />
        </BrowserRouter>
      </Provider>
    );
  }
}
Root.defaultProps = {
  store: {},
};

Root.propTypes = {
  store: shape({}),
};

export default Root;
