import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';
import {usersReducer} from './users-reducer';
import thunk from 'redux-thunk';
import {postsReducer} from './posts-reducer';
import {commentsReducer} from './comment-reducer';


let reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
});

export type ReduxStoreType = ReturnType<typeof reducers>

export let store = createStore(reducers,  applyMiddleware(thunk))

// @ts-ignore
window.store = store