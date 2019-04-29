import React from 'react';

const CheckBox = (props) => {
    return (
        <div className="check-item">
            <input type="checkbox" id={props.id} onClick={props.clicked}/><label htmlFor={props.id} className="check-box"><div className="check-text">{props.text}</div></label>
            {props.children}
        </div>
    );
}

export default CheckBox;