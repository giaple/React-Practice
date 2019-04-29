import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

class Toolbar extends Component {

    render() {

        let eleArray = [];

        for (let ele in this.props.toolbar) {
            eleArray.push({
                key: ele,
                class: this.props.toolbar[ele].className,
                id: this.props.toolbar[ele].id,
                isDisplay: this.props.toolbar[ele].isDisplay,
            })
        }

        return (
            <div className="toolbar flex">
                {eleArray.map(ele => (
                    <div
                        className={"icon " + ele.class}
                        id={ele.id}
                        key={ele.key}
                        onClick ={()=>this.props.onProfileAction(ele.key)}
                        ></div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        toolbar: state.toolbars
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onProfileAction: (key) => dispatch({ type: actionTypes.TOOLBAR_ACTION , key: key})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)