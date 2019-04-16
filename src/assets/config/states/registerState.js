import moment from 'moment';

const registerState = {
    profilePicture: {

    },
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
        },
        email: {
            type: 'input',
            label: "E-Mail",
            config: {
                type: 'text',
                placeholder: 'Vui lòng nhập địa chỉ e-mail của bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        fullName: {
            type: 'input',
            label: "Họ và Tên",
            config: {
                type: 'text',
                placeholder: 'Vui lòng nhập họ và tên của bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        phoneNumber: {
            type: 'input',
            label: "Số Điện Thoại",
            config: {
                type: 'text',
                placeholder: 'Vui lòng nhập số điện thoại của bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        address: {
            type: 'input',
            label: "Địa Chỉ",
            config: {
                type: 'text',
                placeholder: 'Vui lòng nhập địa chỉ của bạn'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        DoB: {
            type: 'datePicker',
            label: "Ngày Tháng Năm sinh",
            config: {
                format: 'YYYY/MM/DD',
                defaultValue: moment('2015/01/01', 'YYYY/MM/DD')
            },
            value: null,
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        gender: {
            type: 'radio',
            label: "Giới Tính",
            config: {
                options: [
                    { value: '0', displayValue: 'Nam' },
                    { value: '1', displayValue: 'Nữ' }
                ]
            },
            validation: {
                required: true
            },
            value: '',
            valid: true,
            touched: false
        }
    },
    formIsValid: false,
    loading: false
}

export default registerState;