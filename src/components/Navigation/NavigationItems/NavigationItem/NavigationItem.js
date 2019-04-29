import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (

    <NavLink className={props.styles}
        to={props.link}
        exact={props.exact}
        >{props.children}</NavLink>

);

export default navigationItem;