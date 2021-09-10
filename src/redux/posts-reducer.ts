import {Dispatch} from 'redux';
import {postsAPI} from '../api/api';

type ActionsType = setUserPostsAT | addPostAT

export type setUserPostsAT = ReturnType<typeof setUserPostsAC>
export type addPostAT = ReturnType<typeof addPostAC>

export type PostsDataType = {
    userId: number
    id: number
    title: string
    body: string
}

let initialState: Array<PostsDataType> = []

export const postsReducer = (state: Array<PostsDataType> = initialState, action: ActionsType): Array<PostsDataType> => {
    switch (action.type) {
        case 'SET-POSTS': {
            return action.posts.map(u => {
                return {...u}
            })
        }
        case 'ADD-POST': {
            return [{
                userId: 1,
                id: 100+1,
                title: action.titleValue,
                body: action.newText
            }, ...state]
        }
        default:
            return state
    }
}

export const setUserPostsAC = (posts: Array<PostsDataType>) => {
    return {type: 'SET-POSTS', posts} as const
}

export const addPostAC = (titleValue: string, newText: string) => {
    return {type: 'ADD-POST', titleValue, newText} as const
}

export const getPostsTC = (userId: number) => (dispatch: Dispatch) => {
    postsAPI.getPosts(userId).then(res => {
        console.log(res.data)
        dispatch(setUserPostsAC(res.data))
    });
}
export const addPostTC = (titleValue: string, newText: string) => (dispatch: Dispatch) => {
    postsAPI.addPost(titleValue, newText).then(res => {
        console.log(res.data)
        dispatch(addPostAC(titleValue, newText))
    });
}