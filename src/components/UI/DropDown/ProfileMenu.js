import React from 'react';

import classes from './ProfileMenu.module.css';

const ProfileMenu = (props) => {

    let shown = null;
    if (props.isShow) {
        shown = classes.show;
    }

    return (
        <div tabIndex="0" className={props.styles} onClick={() => props.clicked()} onBlur={props.onBlur}>
            <div className={[classes["profile-act"], shown].join(' ')} >
                <div className={classes.action}>add</div>
                <div className={classes.action}>import</div>
                <div className={classes.divider}></div>
                <div className={classes.action}>rename</div>
                <div className={classes.action}>duplicate</div>
                <div className={classes.action}>export</div>
                <div className={classes.divider}></div>
                <div className={classes.action}>delete</div>
            </div>
        </div>
    );
}

export default ProfileMenu;