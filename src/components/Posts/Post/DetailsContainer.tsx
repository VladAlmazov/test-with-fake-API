import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ReduxStoreType} from '../../../redux/redux-store';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Details} from './Details';
import {CommentsDataType, getCommentsTC} from '../../../redux/comment-reducer';
import {deletePostTC, PostsDataType, updatePostTC} from '../../../redux/posts-reducer';

type UserContainerPropsType = {
    comments: Array<CommentsDataType>
    getCommentsTC: (postId: number) => void
    posts: Array<PostsDataType>
    deletePostTC: (postId: number) => void
    updatePostTC: (body: string, postId: number) => void
}

type PathParamsType = {
    id: string
}

type PropsType = RouteComponentProps<PathParamsType> & UserContainerPropsType

class PostsContainer extends React.Component<PropsType> {

    componentDidMount() {
        let postId = +this.props.match.params.id;
        this.props.getCommentsTC(postId)
    }

    render() {
        return <>
            <Details comments={this.props.comments}
                     posts={this.props.posts}
                     postId={+this.props.match.params.id}
                     updatePostTC={this.props.updatePostTC}
                     deletePost={this.props.deletePostTC}/>
        </>
    }
}

let mapStateToProps = (state: ReduxStoreType) => {
    return {
        comments: state.comments,
        posts: state.posts,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getCommentsTC, deletePostTC, updatePostTC}),
)(PostsContainer)