import React from 'react';
import {NavLink} from 'react-router-dom';
import {UsersDataType} from '../../redux/users-reducer';
import style from './Users.module.css'

type UserPropsType = {
    users: Array<UsersDataType>
}

export const Users = (props: UserPropsType) => {

    return (
        <div className={style.userWrapper}>
            {
                props.users.map(u => <div key={u.id} className={style.users}>
                    <h3>
                        Username: {u.username} <br/>
                        Full name: <br/>
                        {u.name}
                    </h3>
                    <div>
                        E-mail: <br/>
                        {u.email}
                    </div>
                    <div>
                        Address: <br/>
                        {u.address.city} <br/>
                        {u.address.street}, {u.address.suite} <br/>
                        {u.address.zipcode}
                    </div>
                    <div>
                        Mobile phone: <br/>
                        {u.phone}
                    </div>
                    <div>
                        Personal website: <br/>
                        <NavLink to=""> {u.website}</NavLink>
                    </div>
                    <div>
                        Company: <br/>
                        {u.company.name} <br/>
                        Catchphrase: <br/>
                        {u.company.catchPhrase} <br/>
                        Sphere of activity: <br/>
                        {u.company.bs}
                    </div>
                    <div className={style.postButton}>
                        <NavLink to={`/user/${u.id}`}>
                            <button className={style.posts}>
                                Posts
                            </button>
                        </NavLink>
                    </div>
                </div>)
            }
        </div>
    )
}