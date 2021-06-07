import React from "react";
import style from './developers.module.css';
import {NavLink} from "react-router-dom";
import ask from "../../../img/developers/ask.png";
import bsfc from "../../../img/developers/bsfc.jpg";
import family from "../../../img/developers/family.jpg";
import gik from "../../../img/developers/gik.jpg";
import kvartal from "../../../img/developers/kvartal.jpg";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const Developers = () => {
  return (
    <div className={style.toolsWrapper}>
        <div className={style.card}>
            <NavLink to={`/developer`}>
                <img className={style.logo} src={ask} alt={'dev'} />
            </NavLink>
        </div>
        <div className={style.card}>
            <NavLink to={`/developer`}>
                <img className={style.logo} src={bsfc} alt={'dev'} />
            </NavLink>
        </div>
        <div className={style.card}>
            <NavLink to={`/developer`}>
                <img className={style.logo} src={family} alt={'dev'} />
            </NavLink>
        </div>
        <div className={style.card}>
            <NavLink to={`/developer`}>
                <img className={style.logo} src={gik} alt={'dev'} />
            </NavLink>
        </div>
        <div className={style.card}>
            <NavLink to={`/developer`}>
                <img className={style.logo} src={kvartal} alt={'dev'}/>
            </NavLink>
        </div>
    </div>
  )
}
export default compose(withAuthRedirect)(Developers);