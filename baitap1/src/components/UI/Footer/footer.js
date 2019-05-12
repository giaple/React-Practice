import React from 'react';

import classes from './footer.module.css';

const footer = (props) => {
    return (
        <div className={classes.Footer}>
            {props.children}
        </div>
    );
}

export default footer;