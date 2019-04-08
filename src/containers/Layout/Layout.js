import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from '../../components/header/Header'
import Sider from '../../components/Sider/Sider'

const {
    Footer, Content
} = Layout;

class layout extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = () => {
        const collapsed = !this.state.collapsed
        this.setState({ collapsed:  collapsed});
    }

    render() {
        return <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
            </Sider>
            <Layout>
                <Header></Header>
                <Content style={{ margin: '0 16px' }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    }
}

export default layout;