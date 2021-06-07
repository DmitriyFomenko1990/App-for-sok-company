import React from "react";
import style from "./Navigation.module.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={style.container}>
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
                <div className={style.item}>
                    <NavLink to="/news" activeClassName={style.active}>Новости</NavLink></div>
            </nav>

        </div>
    )
};
export default Navigation;