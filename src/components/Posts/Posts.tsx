import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {PostsDataType} from '../../redux/posts-reducer';
import {Modal} from '../common/Modal/Modal';
import style from './Posts.module.css'

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
        <div key={p.id} className={style.postsWrapper}>
            <h4 className={style.titleBlock}>
                {p.title}
            </h4>
            <div className={style.bodyBlock}>
                {p.body}
            </div>
            <div>
                <NavLink to={`/user/${p.userId}/postInfo/${p.id}`} className={style.detailsButton}>
                        Details
                </NavLink>
            </div>
        </div>)

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive} addPost={onAddPost}/>
            <div className={style.titleBlock}>
                <h2>
                    My posts:
                </h2>
            </div>
            <div className={style.addButton}>
                <button onClick={() => setModalActive(true)} className={style.detailsButton}>
                    Add new
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}