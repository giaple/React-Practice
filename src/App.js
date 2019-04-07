import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import Table from './containers/Table/Table';
import './App.css';

class App extends Component {

  render() {
    return (
      <Layout>
        <button>Tạo Mới</button>
        <Table/>
      </Layout>
    );
  }
}

export default App;
