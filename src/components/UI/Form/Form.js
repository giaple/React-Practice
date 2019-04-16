import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';
import Input from '../Input/input';
import classes from './Login.module.css';

class Form extends Component {

    render() {
        const formElementsArray = [];
        for (let key in this.props.elements) {
            formElementsArray.push({
                id: key,
                config: this.props.elements[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} className={classes["modal-content"]}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        type={formElement.config.type}
                        elementConfig={formElement.config.config}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.props.changed(event, formElement.id)} />
                ))}
                {this.props.children}
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.model}>
                {form}
            </div>
        );
    }
}

export default Form;