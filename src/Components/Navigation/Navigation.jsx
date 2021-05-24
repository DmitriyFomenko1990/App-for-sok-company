import React from 'react';
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={style.appNavigation}>
            <div className={style.item}>
                <NavLink to="/profile/" activeClassName={style.active}>Профиль</NavLink></div>
            <div className={style.item}>
                <NavLink to="/objects" activeClassName={style.active}>Объекты</NavLink></div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Коллеги</NavLink></div>
            <div className={style.item}>
                <NavLink to="/developers" activeClassName={style.active}>Застройщики</NavLink></div>
            <div className={style.item}>
                <NavLink to="/education" activeClassName={style.active}>База знаний</NavLink></div>
        </nav>
    )
};
export default Navigation;