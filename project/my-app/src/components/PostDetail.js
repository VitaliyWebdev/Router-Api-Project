import React, {useEffect} from 'react';
import '../App.css'
import {getData} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {SET_CHOSEN_POST} from "../redux/action-types";

export default function PostDetail() {
    const dispatch = useDispatch();
    const posts = useSelector(store => store.posts.posts);

    useEffect(async () => {
        let data = await getData(`posts?userId=${1}`)
dispatch({type:SET_CHOSEN_POST,payload:data})
    })
// const {body,id,title} = posts.find(el=> el.id === +params.id);
    console.log(posts,'chose posts')

    return (
        <div className='details-box'>
            <h1>Details about chosen post</h1>
            {/*<p>Id:{id}</p>*/}
            {/*<p>Body:{body}</p>*/}
            {/*<p>Title:{title}</p>*/}
        </div>
    );
}
