import React from 'react';
import {CommentsDataType} from '../../../redux/comment-reducer';
import {PostsDataType} from '../../../redux/posts-reducer';
import style from './Details.module.css'

type DetailsPropsType = {
    comments: Array<CommentsDataType>
    posts: Array<PostsDataType>
    postId: number
    deletePost: (postId: number) => void
}

export const Details = (props: DetailsPropsType) => {
    const deletePost = (postId: number) => {
        props.deletePost(postId)
    }
    return (
        <div>
            <div className={`${style.commentsWrapper} ${style.postContainer}`}>
                <h2>
                    Post: <br/>
                </h2>
                {props.posts.find(p => p.id === +props.postId)?.body}
            </div>
            <div className={style.buttons}>
                <button className={style.detailsButton}>Edit</button>
                <button className={style.detailsButton}
                        onClick={() => deletePost(props.postId)}>
                    Delete
                </button>
            </div>
            <div className={style.commentsWrapper}>
                <h2 style={{color: 'indigo'}}>
                    Comments:<br/>
                </h2>
                {props.comments.map(c =>
                    <div key={c.id} className={style.singleComment}>
                        <h4>
                            {c.name} <br/>
                            {c.email}
                        </h4>
                        <div>
                            {c.body}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}