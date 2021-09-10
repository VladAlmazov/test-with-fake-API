import React from 'react';
import { Users } from './Users';
import {ReduxStoreType} from '../../redux/redux-store';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {getUsersTC, UsersDataType} from '../../redux/users-reducer';

type UserContainerPropsType = {
    users: Array<UsersDataType>
    getUsersTC: () => void
}

class UsersContainer extends React.Component<UserContainerPropsType> {

    componentDidMount() {
        this.props.getUsersTC()
    }

    render() {
        return <>
            <Users users={this.props.users}/>
        </>
    }
}

let mapStateToProps = (state: ReduxStoreType) => {
    return {
        users: state.users
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersTC
    }),
) (UsersContainer)