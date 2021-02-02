import React, {useEffect} from 'react';
import {getData} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {SET_USERS} from "../redux/action-types";
import '../App.css'
import {Link} from "react-router-dom";


export default function UsersList() {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.users)

    useEffect(async () => {
        const data = await getData('users')
        dispatch({type: SET_USERS, payload: data})
    }, [])
    return (
        <div className='d-flex user-list col-3'>
            <Link to='/posts'>
                <button type="button" className="btn btn-primary">Posts</button>
            </Link>
            <ul className='user-box'>
                {!!users && users.map((user, id) => <li key={id}>{user.id}:{user.name}</li>)}
            </ul>
        </div>
    );
}
