import {Dispatch} from 'redux';
import {commentAPI} from '../api/api';

type ActionsType = setCommentsAT

export type setCommentsAT = ReturnType<typeof setCommentAC>

export type CommentsDataType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

let initialState: Array<CommentsDataType> = []

export const commentsReducer = (state: Array<CommentsDataType> = initialState, action: ActionsType): Array<CommentsDataType> => {
    switch (action.type) {
        case 'SET-COMMENTS': {
            return action.posts.map(c => {
                return {...c}
            })
        }
        default:
            return state
    }
}

export const setCommentAC = (posts: Array<CommentsDataType>) => {
    return {type: 'SET-COMMENTS', posts} as const
}

export const getCommentsTC = (postId: number) => (dispatch: Dispatch) => {
    commentAPI.getComments(postId).then(res => {
        console.log(res.data)
        dispatch(setCommentAC(res.data))
    });
}