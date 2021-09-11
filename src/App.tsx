import React, {useEffect} from 'react';
import style from './App.module.css';
import {getUsersTC} from './redux/users-reducer';
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import {useDispatch} from 'react-redux';
import { Nav } from './components/Nav/Nav';
import PostsContainer from './components/Posts/PostsContainer';
import PostContainer from './components/Posts/Post/DetailsContainer';

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    return (
        <div className={style.appWrapper}>

            <Nav/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>
            <Route path={`/user/:userId`} exact render={() => <PostsContainer/>}/>
            <Route path={`/user/:userId/postInfo/:id`}  render={() => <PostContainer/>}/>
        </div>
    );
}
