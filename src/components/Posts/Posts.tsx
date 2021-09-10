import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {PostsDataType} from '../../redux/posts-reducer';
import {Modal} from '../common/Modal/Modal';

type UserPropsType = {
    posts: Array<PostsDataType>
    addPost: (titleValue: string, newText: string) => void
}

export const Posts = (props: UserPropsType) => {
    const [modalActive, setModalActive] = useState<boolean>(false)

    const onAddPost = (titleValue: string, newText: string) => {
        props.addPost(titleValue, newText)
    }

    const postsElements = props.posts.map(p =>
        <div key={p.id}>
            <h4>
                {p.title}
            </h4>
            <div>
                {p.body}
            </div>
            <NavLink to={`/user${p.userId}/postInfo${p.id}`}><button>Details</button></NavLink>
        </div>)

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive} addPost={onAddPost}/>
            <div>
                My posts
                <span><button onClick={() => setModalActive(true)}>Add new</button></span>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}