import React from "react";
import style from './Education.module.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Calc from "./Calc/Calc";


const Education = () => {
  return (
    <div className={style.education}>
        <div className={style.title}>
            <ul className={style.list}>
                <NavLink to={`/calc`}><li>Обучение новых сотрудников</li></NavLink>
                <NavLink to={`/calc`}><li>Продажи</li></NavLink>
                <NavLink to={`/calc`}><li>ЧЕК - листы для работы</li></NavLink>
                <NavLink to={`/calc`}><li>Калькуляторы</li></NavLink>
                <NavLink to={`/calc`}><li>Ипотека</li></NavLink>
            </ul>
        </div>
        <Calc></Calc>
    </div>
  )
}
export default compose(withAuthRedirect)(Education);
