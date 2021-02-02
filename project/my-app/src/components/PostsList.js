import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {getData} from "../api";
import {SET_POSTS} from "../redux/action-types";
import {useDispatch, useSelector} from "react-redux";


export default function PostsList() {
    const dispatch = useDispatch();
    const posts = useSelector((store) => store.posts.posts)

    useEffect(async () => {
        const data = await getData('posts')
        dispatch({type: SET_POSTS, payload: data})
    }, [])


    return (
        <div className='d-flex user-list col-5'>
            <ul className='user-box'>
                <Link to='/posts/newPost'>
                    <button type="button"
                            className="btn btn-dark btn-lg">
                        Create New Post
                    </button>
                </Link>

                {
                    !!posts && posts.map((post, id) =>
                        <li key={id}>{post.id}:{post.title}
                            <Link to={`/posts/${post.id}`}>
                                <button
                                    type="button"
                                    className="btn btn-primary">
                                    details
                                </button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
