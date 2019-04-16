import React, { Component } from 'react';

import LoginState from '../../assets/config/states/loginState';

import Form from '../../components/UI/Form/Form';
import Button from '../../components/UI/Button/button';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { ...LoginState };
    }

    componentDidMount(){
        console.log(this.state);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedLoginForm = {
            ...this.state.elements
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({elements: updatedLoginForm, formIsValid: formIsValid});
    }

    render() {
        
        return (
            <Form elements = {this.state.elements} changed={this.inputChangedHandler}>
                <Button btnType="Success" disabled={!this.state.formIsValid}>ĐĂNG NHẬP</Button>
                bạn chưa đăng ký? <a>Đăng ký tài khoản mới</a>
            </Form>
        )
        
    }
}

export default Login;