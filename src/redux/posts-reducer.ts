import {Dispatch} from 'redux';
import {postsAPI} from '../api/api';

type ActionsType = setUserPostsAT | addPostAT | deletePostAT | updatePostAT

export type setUserPostsAT = ReturnType<typeof setUserPostsAC>
export type addPostAT = ReturnType<typeof addPostAC>
export type deletePostAT = ReturnType<typeof deletePostAC>
export type updatePostAT = ReturnType<typeof updatePostAC>

export type PostsDataType = {
    userId: number
    id: number
    title: string | undefined
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
                id: 100 + 1,
                title: action.titleValue,
                body: action.newText
            }, ...state]
        }
        case 'DELETE-POST': {
            return state.filter(p => p.id !== action.postId)
        }
        case 'UPDATE-POST': {
            return state.map(p => p.id === action.postId ? {...p, body: action.body} : p)
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

export const deletePostAC = (postId: number) => {
    return {type: 'DELETE-POST', postId} as const
}
export const updatePostAC = (body: string, postId: number) => {
    return {type: 'UPDATE-POST', postId, body} as const
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
export const deletePostTC = (postId: number) => (dispatch: Dispatch) => {
    postsAPI.deletePost(postId).then(res => {
        console.log(res.data)
        dispatch(deletePostAC(postId))
    });
}
export const updatePostTC = (body: string, postId: number) => (dispatch: Dispatch) => {
    postsAPI.updatePost(body, postId).then(res => {
        dispatch(updatePostAC(body, postId))
    });
}