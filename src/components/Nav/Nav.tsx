import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'

export const Nav = () => {

    return (
        <nav className={style.navContainer}>
            <div>
                <NavLink to={'/users'} className={style.navLink}>Users</NavLink>
            </div>
        </nav>
    );
}