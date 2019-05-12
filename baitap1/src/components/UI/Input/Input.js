import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Radio } from 'antd';

import classes from './Input.module.css';

const RadioGroup = Radio.Group;

const input = (props) => {

    let item = null;

    switch (props.item) {
        case 'input':
            item = <input className={classes.InputItem} {...props.config} onChange={props.changed} />;
            break;
        case 'textArea':
            item = <textarea className={classes.InputItem} {...props.config} onChange={props.changed} />;
            break;
        case 'datePicker':
            item = <DatePicker className={classes.InputItem} {...props.config} onChange={props.changed} />;
            break;
        case 'radio':
            const items = props.radioElement;
            let radioElement = [];

            for(let key in items){
                radioElement.push(items[key]);
            }
            console.log(radioElement.length);
            item = (<RadioGroup onChange={props.changed}>
                {radioElement.map(ele => (
                    <Radio key={ele.value}
                    value={ele.value}>{ele.text}</Radio>
                ))}
            </RadioGroup>)
            break;
        default: item = <input className={classes.InputItem} {...props.config} onChange={props.changed} />

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Lable}>{props.label}</label>
            {item}
        </div>
    )
};

export default input;