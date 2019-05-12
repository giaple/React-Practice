import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const {Header,Footer,Content} = Layout;

class layout extends Component {

    render() {

        const layoutElementArray = [];

        if(this.props.LayoutConfig["sider"]){

        }else{
            layoutElementArray.push(<Header/>);
            layoutElementArray.push(<Content>{this.props.children}</Content>);
            layoutElementArray.push(<Footer/>);
        }

        return (
            <Layout>
                {layoutElementArray}
            </Layout>
        );
    }
}


export default layout;