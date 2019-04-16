const loginState = {
    elements: {
        userName: {
            type: 'input',
            label: "Tài Khoản Đăng Nhập",
            config: {
                type: 'text',
                placeholder: 'Vui Lòng Nhập Tên Tài Khoản Của Bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        passWord: {
            type: 'input',
            label: "Mật Khẩu",
            config: {
                type: 'password',
                placeholder: 'Vui lòng nhập mật khẩu của bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    },
    touched: false,
    loading: false
}

export default loginState;