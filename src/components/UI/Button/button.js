import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import classes from './button.module.css';

const button = (props) => (
    <Button block
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</Button>
);

export default button;