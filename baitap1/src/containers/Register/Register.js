import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Button } from 'antd';

import { RegisterState } from '../../assets/config/StateConfig';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { ...RegisterState };
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedLoginData = {
            ...this.state.elements
        };

        const updatedFormElement = {
            ...updatedLoginData[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedLoginData[inputIdentifier] = updatedFormElement;
        this.setState({ elements: updatedLoginData });

    }

    componentDidMount(){
        console.log(this.state);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {

        const formElement = [];

        for (let key in this.state.elements) {
            formElement.push({
                id: key,
                config: this.state.elements[key]
            });
        }

        return (
            <Form submitted={this.loginButtonHandler}>
                {formElement.map(ele => (
                    <Input
                        radioElement={ele.config.radioElement}
                        key={ele.id}
                        item={ele.config.inputElement}
                        label={ele.config.label}
                        config={ele.config.inputConfig}
                        value={ele.value}
                        changed={(event) => this.inputChangedHandler(event, ele.id)} />))}
                <Button type="primary" style={{ width: "100%" }}>LOGIN</Button>
                <a href="">Đăng ký thành viên</a>
            </Form>
        );
    }
}

export default Register;