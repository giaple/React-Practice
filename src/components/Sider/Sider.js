import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";

import Classes from './sider.module.css'

const {
    Sider
} = Layout;

const sider = (props) => {
    return <Sider
        trigger={null}
        collapsible
        collapsed={props.collapsed}
    >
        <div className={Classes.Toggle} onClick={props.onCollapse}>
            <Icon type="menu-fold"></Icon>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                <Icon type="user" />
                <span>Quản Lý Người Dùng</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="notification" />
                <span>Quản Lý Thông Báo</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="profile" />
                <span>Thông tin cá nhân</span>
            </Menu.Item>
        </Menu>
    </Sider>
}

export default sider;