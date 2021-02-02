import React, {useEffect} from 'react';
import '../App.css'
import {getData} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {SET_CHOSEN_POST} from "../redux/action-types";
import {useParams} from 'react-router-dom';

export default function PostDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id);
    const posts = useSelector(store => store.posts.posts);

    useEffect(async () => {
        let data = await getData(`posts?userId=${id}`)
        dispatch({type: SET_CHOSEN_POST, payload: data})
    }, [])
// const {body,id,title} = posts.find(el=> el.id === +params.id);
    console.log(posts, 'chose posts')

    return (
        <div className='details-box'>
            <h1>Details about chosen post with userId:{id}</h1>
           <ul>
               {
                   posts.map((el,index)=><li key={index}>{el.id}-{el.title}</li>)
               }
           </ul>
        </div>
    );
}
