import {SET_USERS} from "../action-types";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS :
            return {...state, users: action.payload}
            default : return state;
    }
}
