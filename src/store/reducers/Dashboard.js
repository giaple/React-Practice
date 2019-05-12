import * as actionTypes from '../actions/actions';

const data = {
    profiles: [
        {
            key: 1,
            name: 'Edrward 1',
            age: 32,
            address: 'London Park no. 1',
        },
        {
            key: 2,
            name: 'Edrward 2',
            age: 32,
            address: 'London Park no. 2',
        },
        {
            key: 3,
            name: 'Edrward 3',
            age: 32,
            address: 'London Park no. 3',
        },
        {
            key: 4,
            name: 'Edrward 4',
            age: 32,
            address: 'London Park no. 4',
        }
    ]
};

const deepClone = (obj) => { return JSON.parse(JSON.stringify(obj)) };

const reducer = (state = data, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROFILE:
            return {
                ...state,
                profiles: [
                    ...state.profiles,
                    {
                        key: state.profiles.length + 1,
                        name: 'Edrward ' + (state.profiles.length + 1),
                        age: 32,
                        address: 'London Park no. ' + (state.profiles.length + 1),
                    }
                ]
            }
        case actionTypes.EDIT_PROFILE:
            const newData = [...state.profiles];
            const index = newData.findIndex(item => action.index === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...action.value,
                });
            } else {
                newData.push(action.value);
            }
            return {
                ...state,
                profiles: [...newData]
            }
        default: return state;
    }
};

export default reducer;