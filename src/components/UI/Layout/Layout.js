import React from 'react';

import './Layout.css';
const layout = (props) => {
    return (
        <div className="main-container">
            <div className="thx-wrapper flex">
                {props.children}
            </div>

        </div>
    );
}

export default layout;