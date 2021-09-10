import React from 'react';
import {CommentsDataType} from '../../../redux/comment-reducer';
import {PostsDataType} from '../../../redux/posts-reducer';

type DetailsPropsType = {
    comments: Array<CommentsDataType>
    posts: Array<PostsDataType>
    postId: number
}

export const Details = (props: DetailsPropsType) => {
    return (
        <div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
                {props.comments.map(c =>
                    <div key={c.id}>
                        <h4>
                            {c.name}
                        </h4>
                        <div>
                            {c.email}
                        </div>
                        <div>
                            {c.body}
                        </div>
                    </div>)}
            </div>
        </div>
    )
}