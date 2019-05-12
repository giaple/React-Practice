export const LoginState = {
    elements:{
        userName : {
            inputElement: 'input',
            label: 'UserName',
            inputConfig: {
                type: 'text',
                placeholder: 'User Name'
            },
            value: ''
        },
        passWord: {
            inputElement: 'input',
            label: 'Password',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: ''
        }
    },
    validation: false
}

export const RegisterState = {
    elements:{
        userName : {
            inputElement: 'input',
            label: 'UserName',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        passWord: {
            inputElement: 'input',
            label: 'Password',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        fullName : {
            inputElement: 'input',
            label: 'Ho va Ten',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        phoneNumber: {
            inputElement: 'input',
            label: 'Số Điện Thoại',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        email : {
            inputElement: 'input',
            label: 'E-Mail',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        address: {
            inputElement: 'input',
            label: 'Địa Chỉ',
            inputConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: null
        },
        DoB: {
            inputElement: 'datePicker',
            label: 'Ngày Tháng Năm Sinh',
            inputConfig: {
            },
            value: null
        },
        Gender: {
            inputElement: 'radio',
            label: 'Giới Tính',
            inputConfig: {
            },
            radioElement:{
                radio1:{
                    text: "Male",
                    value: 0
                },
                radio2:{
                    text: "Female",
                    value: 1
                }
            },
            value: null
        }
    },
    validation: false
}