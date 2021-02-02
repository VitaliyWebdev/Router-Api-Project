import {combineReducers} from "redux";
import {userReducer} from "./user-reducer";
import {postReducer} from "./post-reducer";


export const reducer = combineReducers({
    users: userReducer,
    posts: postReducer,

})
