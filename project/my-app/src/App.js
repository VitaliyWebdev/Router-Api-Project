import React from 'react';
import UsersList from "./components/UsersList";
import {Route, Switch} from "react-router-dom";
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";
import NewPost from "./components/NewPost";

export default function App() {


    return (
        <div className=''>
            <Switch>
                <Route exact path='/'>
                    <UsersList/>
                </Route>
                <Route exact path='/posts'>
                    <PostsList/>
                </Route>
                <Route exact path='/posts/:id' component={PostDetail}/>
                <Route exact path={'/posts/:id/new'} component={NewPost}/>



            </Switch>
        </div>
    );
}
