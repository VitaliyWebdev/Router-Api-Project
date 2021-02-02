import {CREATE_POST, SET_CHOSEN_POST, SET_POSTS} from "../action-types";

const initialState = {
    posts: [],
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS :return {...state, posts: action.payload}
        case SET_CHOSEN_POST : return {...state,posts: action.payload}
        case CREATE_POST :{
            console.log(state,'bef')
            const posts = [...state.posts];
            const newPost = action.payload;
            posts.push(newPost);
            console.log(...state,'aft')
            return {...state,posts};

        }

        default : return state;
    }
}
