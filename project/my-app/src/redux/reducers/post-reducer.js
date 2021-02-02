import {SET_CHOSEN_POST, SET_POSTS} from "../action-types";

const initialState = {
    posts: [],
    chosen:[]
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS :return {...state, posts: action.payload}
        case SET_CHOSEN_POST : return {...state,posts: action.payload}
        default : return state;
    }
}
