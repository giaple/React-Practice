import React, { Component } from 'react';
import {
    Input, Form,InputNumber
} from 'antd';

import EditableContext from '../../Contexts/EditableContext';

const FormItem = Form.Item;

class EditableCell extends Component {

    // toggleEdit = () => {
    //     const editing = !this.state.editing;
    //     this.setState({ editing }, () => {
    //         if (editing) {
    //             this.input.focus();
    //         }
    //     });
    // }

    getInput = () => {
        if (this.props.inputType === 'number') {
          return <InputNumber />;
        }
        return <Input />;
      };

    save = (e) => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    }

    render() {
        const {
            editing,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            const { getFieldDecorator } = form;
                            return (
                                <td {...restProps}>
                                  {editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                      {getFieldDecorator(dataIndex, {
                                        rules: [{
                                          required: true,
                                          message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                      })(this.getInput())}
                                    </FormItem>
                                  ) : restProps.children}
                                </td>
                              );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default EditableCell;