import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import Layout from './containers/Layout/Layout';
import Login from '../src/containers/Layout/Login/LoginLayout';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login}/>
          <Route path="/person" component={Layout}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
