import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import Table from './containers/Table/Table';

class App extends Component {

  render() {
    return (
      <Layout>
        <Table/>
      </Layout>
    );
  }
}

export default App;
