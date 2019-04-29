import React, { Component } from 'react';

import classes from './ProfileBar.module.css';

class ProfileBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileExpand: false
        }
    }

    profileExpandHandler() {
        const expand = this.state.profileExpand;
        console.log(expand);
        this.setState({
            profileExpand: !expand
        })
    }
    outsideClickHandler() {
        if(this.state.profileExpand)
        this.setState({
            profileExpand: false
        })
    }


    render() {

        let expandStyle = [classes["s3-options"], classes.flex].join(' ');

        if (this.state.profileExpand) {
            expandStyle = [classes["s3-options"],classes.expand,classes.flex].join(' ');
        }

        return (
            <div className={classes["dropdown-area"]}>
                <div 
                    tabIndex="0"
                    id="profileDrop" className={classes["s3-dropdown"]}
                    onClick={() => this.profileExpandHandler()} onBlur={() => this.outsideClickHandler()}>
                    <div className={classes["selected"]}>profile 5</div>
                    <div className={[classes.icon, classes.expand].join(' ')} ></div>
                </div>
                <div id="profileDropOpt" className={expandStyle}>
                    <div className={classes.option}>default profile</div>
                    <div className={classes.option}>profile 2</div>
                    <div className={classes.option}>profile 3</div>
                    <div className={classes.option}>profile 4</div>
                    <div className={[classes.option, classes.active].join(' ')}>profile 5</div>
                    <div className={classes.option}>profile 6</div>
                    <div className={classes.option}>profile 7</div>
                    <div className={classes.option}>profile 8</div>
                </div>
            </div>
        );
    }

}

export default ProfileBar;