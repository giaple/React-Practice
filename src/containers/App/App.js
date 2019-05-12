import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import Layout from '../../components/Layouts/Dashboard/Layout';
import Login from '../../components/Layouts/Login/LoginLayout';

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
