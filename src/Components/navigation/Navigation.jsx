import React from "react";
import style from "./Navigation.module.scss";
import {NavLink} from "react-router-dom";
import LoginContainer from "../header/LoginContainer";

const Navigation = ({menuActive, setMenuActive}) => {
    return (
        <nav className={menuActive ? `${style.container} ${style.activeMenu}` : style.container}>
            <ul className={style.list}>
                <NavLink to="/profile/" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>Профиль</li>
                </NavLink>
                <NavLink to="/objects" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>Объекты</li>
                </NavLink>
                <NavLink to="/users" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>Коллеги</li>
                </NavLink>
                <NavLink to="/developers" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>Застройщики</li>
                </NavLink>
                <NavLink to="/education" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>База знаний</li>
                </NavLink>
                <NavLink to="/news" activeClassName={style.active} onClick={() => setMenuActive(!menuActive)}>
                    <li className={style.item}>Новости</li>
                </NavLink>
            </ul>
            <LoginContainer/>
        </nav>
    )
};
export default Navigation;