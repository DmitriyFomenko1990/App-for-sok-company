import React from 'react'
import style from './Header.module.scss'
import Navigation from "../Navigation/Navigation";
import LoginContainer from "./LoginContainer";
import sok from "../../img/sokbgi.png";


const Header = () => {
    return (
        <header className={style.container}>
            <div><img className={style.imgBack}
                      src={sok} alt={'СОК'}/>
            </div>
            <div><Navigation className={style.navigationBox}/></div>

            <div><LoginContainer /></div>
        </header>
    )
}
export default Header