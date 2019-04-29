import * as actionTypes from './actions';

const initialState = {
    length: 6,
    profiles: [
        {
            id: "profile1",
            className: "profile-item active default no-edit",
            isActive: true,
            text: "default",
            isEdit: false
        },
        {
            id: "profile2",
            className: "profile-item game no-edit",
            isActive: false,
            text: "game",
            isEdit: false
        },
        {
            id: "profile3",
            className: "profile-item movie no-edit",
            isActive: false,
            text: "movie",
            isEdit: false
        },
        {
            id: "profile4",
            className: "profile-item music no-edit",
            isActive: false,
            text: "music",
            isEdit: false
        },
        {
            id: "custom1",
            className: "profile-item custom",
            isActive: false,
            text: "Custom 1",
            isEdit: true
        },
        {
            id: "custom2",
            className: "profile-item custom",
            isActive: false,
            text: "demo long text demo long text demo",
            isEdit: true
        }
    ],
    toolbars: {
        add: {
            className: "add",
            id: "profileAdd",
            isDisplay: false
        },
        edit: {
            className: "edit",
            id: "profileEdit",
            isDisplay: false
        },
        delete: {
            className: "delete",
            id: "profileDel",
            isDisplay: false
        },
        down: {
            className: "down",
            id: "profileDown",
            isDisplay: false
        },
        up: {
            className: "up",
            id: "profileUp",
            isDisplay: true
        }
    }

}

let activeProfile = 0;

const deepClone = (obj) => { return JSON.parse(JSON.stringify(obj)) };
const up = (object) => {
    const temp = deepClone(object);
    object[activeProfile - 1] = temp[activeProfile];
    object[activeProfile] = temp[activeProfile - 1];
    activeProfile = activeProfile - 1;
}

const down = (object) => {
    const temp = deepClone(object);
    object[activeProfile + 1] = temp[activeProfile];
    object[activeProfile] = temp[activeProfile + 1];
    activeProfile = activeProfile + 1;
}

const reducer = (state = initialState, action) => {
    let name = "custom" + state.length;
    switch (action.type) {
        case actionTypes.TOOLBAR_ACTION:
            if (action.key === 'add') {
                return {
                    ...state,
                    length: state.length + 1,
                    profiles: [
                        ...state.profiles,
                        {
                            id: "custom" + name,
                            className: "profile-item custom",
                            isActive: false,
                            text: "new profile",
                            isEdit: true
                        }
                    ]
                }
            } else if (action.key === 'delete') {

                return state;
            } else if (action.key === 'edit') {
                return state;
            } else if (action.key === 'down') {
                const tempState = deepClone(state);
                
                down(tempState.profiles);

                return {...tempState};
            } else if (action.key === 'up') {

                const tempState = deepClone(state);

                up(tempState.profiles);

                return {...tempState};
            }
            break;
        case actionTypes.PROFILE_CLICKED: {

            const tempState = deepClone(state);
            let tempClass = tempState.profiles[activeProfile].className;

            tempState.profiles[activeProfile].className = tempClass.replace(/ active/g, '');
            tempState.profiles[activeProfile].isActive = false;
            tempClass = tempState.profiles[action.location].className;
            tempState.profiles[action.location].className = tempClass + ' active';
            tempState.profiles[action.location].isActive = true;

            activeProfile = action.location;

            return { ...tempState };
        }

        default: return state;
    }
};

export default reducer;