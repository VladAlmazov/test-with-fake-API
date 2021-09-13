import React, {useState} from 'react';
import {CommentsDataType} from '../../../redux/comment-reducer';
import {PostsDataType} from '../../../redux/posts-reducer';
import style from './Details.module.css'

type DetailsPropsType = {
    comments: Array<CommentsDataType>
    posts: Array<PostsDataType>
    postId: number
    deletePost: (postId: number) => void
    updatePostTC: (body: string, postId: number) => void
}

export const Details = (props: DetailsPropsType) => {
    const postText = String(props.posts.find(p => p.id === +props.postId)?.body);
    const [editMode, setEditMode] = useState<boolean>(true)
    const [title, setTitle] = useState<string>(postText)

    const deletePost = (postId: number) => {
        props.deletePost(postId)
    }

    const onEditMode = () => setEditMode(false);

    const updatePost = (body: string) => {
        if (body) {
            props.updatePostTC(body, props.postId)
            setTitle(body)
        }
        setEditMode(true)
    }

    return (
        <div>
            <div className={`${style.commentsWrapper} ${style.postContainer}`}>
                <h2 style={{width: '100%', textAlign: 'center'}}>
                    Post: <br/>
                </h2>
                <div onDoubleClick={onEditMode}>
                    {editMode
                        ? <p>{postText}</p>
                        : <textarea autoFocus={true} value={title}
                                    onChange={(e) => setTitle(e.currentTarget.value)}/>}
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.detailsButton}
                        onClick={() => updatePost(title)}>
                    Edit
                </button>
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