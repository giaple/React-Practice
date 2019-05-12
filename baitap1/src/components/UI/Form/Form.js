import React from 'react';
import 'antd/dist/antd.css';
import { Form } from 'antd';

import classes from './Form.module.css'

const form = (props) => {
    return (
        <Form className={classes["login-form"]} onSubmit={props.submitted}>
            {props.children}
        </Form>
    );
}

export default form;