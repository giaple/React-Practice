import React, { Component } from 'react';

import classes from './Bar.module.css';
import ProfileBar from '../DropDown/ProfileBar';
import ProfileMenu from '../DropDown/ProfileMenu';

class Bar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isMenuShown: false
        }
    }

    showMenuHandler = ()=>{
        const isShow = this.state.isMenuShown;

        this.setState({
            isMenuShown: !isShow
        })
    }

    outsideClickHandler = () => {
        if(this.state.isMenuShown)
        this.setState({
            isMenuShown: false
        })
    }

    render() {
        return (

                <div className={[classes["profile-bar"], classes["flex"]].join(' ')}>
                    <div className={classes.loader} tooltip="Syncing Profiles"></div>
                    <div>profile</div>
                    <input type="text" name="profile" className={classes.profileEdit} maxLength="25" />
                    <ProfileBar />

                    <ProfileMenu styles={[classes.dots3, classes["hover-border"]].join(' ')} 
                            isShow = {this.state.isMenuShown}
                            clicked={this.showMenuHandler}
                            onBlur = {this.outsideClickHandler}
                            >
                        
                    </ProfileMenu>

                    <div id="deleteAlert" className={['flex', classes.alert, classes["profile-del"]].join(' ')}>
                        <div className={classes.title}>delete profile</div>
                        <div className="body-text t-center">
                            You're about to delete this profile. All bindings in this profile will be deleted.
                            </div>
                        <div className="thx-btn">delete</div>
                    </div>

                    <div className={[classes.obm, classes["hover-border"]].join(' ')} tooltip="On-board Profiles"></div>
                    <div className={classes.divider}></div>
                    <div className={[classes.batt, classes["batt-30"]].join(' ')} tooltip="30% Battery"></div>
                </div>
        );
    }
}

export default Bar;