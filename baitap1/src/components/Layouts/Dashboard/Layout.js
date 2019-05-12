import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Header from '../../header/Header'
import Sider from '../../Sider/Sider';
import Table from '../../../containers/Dashboard/Dashboard';

const {
    Footer, Content
} = Layout;

class layout extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = () => {
        const collapsed = !this.state.collapsed
        this.setState({ collapsed: collapsed });
    }

    alert = () => {
        return <h2>alert</h2>;
    }

    personalInfor = () => {
        return <h2>personalInfor</h2>;
    }

    renderRouter = () => {
        return (<div>
            <Switch>
                <Route path="/person" exact component={Table} />
                <Route path="/person/alert" exact component={this.alert} />
                <Route path="/person/personalInfor" exact component={this.personalInfor} />
            </Switch>

        </div>

        );
    }

    render() {


        return <Layout style={{ minHeight: '100vh' }}>

            <Sider
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
            </Sider>
            <Layout>
                <Header>

                </Header>
                <Content style={{ margin: '0 16px' }}>
                    {this.renderRouter()}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    }
}

export default layout;