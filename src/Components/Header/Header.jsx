import React from 'react'
import style from './Header.module.css'
import Navigation from "../Navigation/Navigation";
import LoginConteiner from "./LoginConteiner";
import sok from "../../img/sokbgi.png";


const Header = () => {
    return (
        <header className={style.container}>
            <div><img className={style.imgBack}
                      src={sok} />
            </div>
            <div><Navigation className={style.navigationBox}/></div>

            <div><LoginConteiner /></div>
        </header>
    )
}
export default Header