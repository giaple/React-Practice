import React, { Component } from 'react';

import Toolbar from '../ToolBar/Toolbar';
import Profile from '../../../containers/Profiles/Profile';

import './Sider.css'


class Sider extends Component {
    render() {
        return (
            <div className="thx-drawer flex">
                <div className="main-title">
                    Profile List
                </div>
                <div id="profileWrapper" className="drawer-select flex">
                    <Profile/>
                    <Toolbar/>
                    <div id="profileDelCfm" className="profile-del alert flex">
                        <div className="title">delete eq</div>
                        <div className="body-text t-center" id="delName">delete eq</div>
                        <div className="thx-btn" id="cfmDelete">delete</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sider;