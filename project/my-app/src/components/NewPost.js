import React, {useState} from 'react';
import {postData} from "../api";
import {useDispatch} from "react-redux";
import {CREATE_POST} from "../redux/action-types";


export default function NewPost() {
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);

        const newPost = {
            id: new Date().getTime(),
            title: e.target[0].value,
            body: e.target[1].value
        }
        console.log('newPost');
        console.log(newPost);
        dispatch({type: CREATE_POST, payload: newPost})
        // postData({})
    }

    return (
        <div>
            <h1>Here you can create a new post</h1>
            <form onSubmit={onSubmitHandler}>
                <input className="form-control" type="text" placeholder="Title"/>
                <input className="form-control" type="text" placeholder="Body"/>
                <button type="submit" className="btn btn-success">Success</button>
            </form>
        </div>
    );
}
