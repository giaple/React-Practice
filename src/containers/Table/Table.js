
import React, { Component } from 'react';
import 'antd/dist/antd.css';

import {
  Table, Popconfirm, Form,Button
} from 'antd';

import EditableContext from '../../Contexts/EditableContext';
import EditableCell from '../../components/table/EditableCell';
import classes from './Table.module.css'

const data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}



class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '' };
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <button
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </button>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <button>Cancel</button>
                  </Popconfirm>

                </span>
              ) : (
                  <span>
                    <button disabled={editingKey !== ''} onClick={() => this.edit(record.key)} className={classes.Button}>Edit</button>
                    <Popconfirm
                      title="Sure to delete?"
                      onConfirm={() => this.delete(record)}
                    >
                      <button className={classes.Button}>Delete</button>
                    </Popconfirm>
                  </span>
                )}
            </div>
          );
        },
      },
    ];
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  delete = (record) => {
    const newData = [...this.state.data];
    const index = newData.indexOf(record);

    newData.splice(index, 1)
    this.setState({ data: newData});
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  handleAdd = () => {
    const  dataSource  = [...this.state.data];
    const newData = {
      key: dataSource.length +1,
      name: `Edward King ${dataSource.length +1}`,
      age: 32,
      address: `London, Park Lane no. ${dataSource.length +1}`,
    };
    this.setState({
      data: [...dataSource, newData]
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Button onClick={this.handleAdd} type="primary" style={{ margin: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: this.cancel,
          }}
        />
      </EditableContext.Provider>
    );
  }
}
const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
