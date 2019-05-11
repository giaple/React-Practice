import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from '../../../components/header/Header';
import Login from './Login'


const {
    Footer, Content
} = Layout;

class LoginLayout extends Component {
    render() {
        return <Layout >
            <Header>header</Header>
            {/* <Layout style={{ backgroundColor: "rgb(123,104,238)" }}>
                
            </Layout> */}

            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: 'rgb(135,206,250)', padding: 24, minHeight: 450 }}>
                    <Login />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    }
}

export default LoginLayout;