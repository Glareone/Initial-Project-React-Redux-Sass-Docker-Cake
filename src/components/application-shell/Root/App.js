import React, { Component } from 'react';
import queryString from 'query-string';
import Page from '../../contaners/Page/Page';

class App extends Component {
  render() {
    const { name } = this.props.match.params;
    const { search } = this.props.location;
    const { shipmentId, customerId } = queryString.parse(search);

    if (!name) {
      return ('');
    }
    return (
      <Page
        name={name}
        shipmentId={shipmentId}
        customerId={customerId}
      />
    );
  }
}

export default App;
