import React from 'react';
import {Layout} from 'antd';

import "antd/dist/antd.css";

const {
    Header
} = Layout;

const header = (props) =>{
    return <Header style={{ padding: 0 }} >{props.children}</Header>
}

export default header;