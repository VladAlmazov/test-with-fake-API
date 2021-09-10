import React from 'react';
import {ReduxStoreType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {addPostTC, getPostsTC, PostsDataType} from '../../redux/posts-reducer';
import {Posts} from './Posts';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PostsContainerPropsType = {
    match: { params: { userId: number } }
    posts: Array<PostsDataType>
    getPostsTC: (userId: number) => void
    addPostTC: (titleValue: string, newText: string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & PostsContainerPropsType

class PostsContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        this.props.getPostsTC(userId)
    }

    render() {
        return <>
            <Posts posts={this.props.posts} addPost={this.props.addPostTC}/>
        </>
    }
}

let mapStateToProps = (state: ReduxStoreType) => {
    return {
        posts: state.posts
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getPostsTC, addPostTC}),
)(PostsContainer)