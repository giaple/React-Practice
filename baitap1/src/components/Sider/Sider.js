import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";
import {withRouter} from 'react-router-dom';

import Classes from './sider.module.css'

const {
    Sider
} = Layout;

class sider extends Component {

    personHandler = () => {
        this.props.history.push('/person');
    }

    alertHandler = () => {
        this.props.history.push('/person/alert');
    }

    personalInforHandler = () =>{
        this.props.history.push('/person/personalInfor')
    }

    componentDidMount(){
        console.log(this.props);
    }

    render() {
        return <Sider
            trigger={null}
            collapsible
            collapsed={this.props.collapsed}
        >
            <div className={Classes.Toggle} onClick={this.props.onCollapse}>
                <Icon type="menu-fold"></Icon>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" onClick={()=>this.personHandler()}>
                    <Icon type="user" />
                    <span>Quản Lý Người Dùng</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={()=>this.alertHandler()}>
                    <Icon type="notification" />
                    <span>Quản Lý Thông Báo</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={()=>this.personalInforHandler()}>
                    <Icon type="profile" />
                    <span>Thông tin cá nhân</span>
                </Menu.Item>
            </Menu>
        </Sider>
    }
}

export default withRouter(sider);