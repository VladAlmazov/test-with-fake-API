import axios from 'axios';
import {UsersDataType} from '../redux/users-reducer';
import {PostsDataType} from '../redux/posts-reducer';
import {CommentsDataType} from '../redux/comment-reducer';

const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
})

export const usersAPI = {
    getUsers () {
        return instance.get<Array<UsersDataType>>('users')
            .then(res => res)
    },
}
export const postsAPI = {
    getPosts (userId: number) {
        return instance.get<Array<PostsDataType>>(`posts?userId=${userId}`)
            .then(res => res)
    },
    addPost (titleValue: string, newText: string) {
        return instance.post('posts', {titleValue, newText})
            .then(res => res)
    },
}
export const commentAPI = {
    getComments (postId: number) {
        return instance.get<Array<CommentsDataType>>(`comments?postId=${postId}`)
            .then(res => res)
    }
}