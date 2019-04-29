import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import './Profile.css';

class Profile extends Component {

    render() {

        const profileEle = this.props.profiles;

        return (
            <div id="profileList" className="scrollable">

                {profileEle.map((ele, index) => (
                    <div key={ele.id} id={ele.id} className={ele.className} onClick = {()=>this.props.onProfileClicked(index)}>
                        {ele.text}
                    </div>
                ))}

                <input
                    id="profileRename"
                    className="profile-item"
                    placeholder="Enter Profile Name"
                    maxLength="25"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profiles: state.profiles
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProfileClicked: (locale) => dispatch({ type: actionTypes.PROFILE_CLICKED, location: locale })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);