import React, { Component } from 'react';
import moment from 'moment';

import RegisterState from '../../assets/config/states/registerState';
import Form from '../../components/UI/Form/Form';
import Button from '../../components/UI/Button/button';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { ...RegisterState };
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value !== null && isValid;
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

        if(updatedFormElement.type === 'datePicker'){
            updatedFormElement.value = moment(event._d,'YYYY/MM/DD');
        }else{
            updatedFormElement.value = event.target.value;
        }
        
        console.log(updatedFormElement.value);

        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ elements: updatedLoginForm, formIsValid: formIsValid });
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {

        return (
            <Form elements={this.state.elements} changed={this.inputChangedHandler}>
            <div>
            <Button btnType="Success" disabled={!this.state.formIsValid}>ĐĂNG KÝ</Button>
            <Button btnType="Success">HỦY</Button>
            </div>
                
            </Form>
        )
    }

}

export default Register;