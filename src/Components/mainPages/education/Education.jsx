import React from "react";
import style from './Education.module.scss'
import {NavLink, Route, Switch} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import Calc from "./calc/Calc";
import Mortgage from "./mortgage/Mortgage";

const Education = () => {
    return (
        <div className={style.education}>
            <div className={style.title}>
                <ul className={style.topBar}>
                    <li><NavLink to='/education/new-employee' activeClassName={style.active}>
                        Обучение новых сотрудников
                    </NavLink></li>
                    <li><NavLink to='/education/sales' activeClassName={style.active}>
                        Продажи
                    </NavLink></li>
                    <li><NavLink to='/education/check-list' activeClassName={style.active}>
                        ЧЕК - листы для работы
                    </NavLink></li>
                    <li><NavLink to='/education/calc' activeClassName={style.active}>
                       Ипотечный калькулятор
                    </NavLink></li>
                    <li><NavLink to='/education/mortgage' activeClassName={style.active}>
                       Ипотека
                    </NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route path='/education/new-employee' render={() => <Calc/>}/>
                <Route path='/education/sales' render={() => <Calc/>}/>
                <Route path='/education/check-list' render={() => <Calc/>}/>
                <Route path='/education/calc' render={() => <Calc/>}/>
                <Route path='/education/mortgage/' render={() => <Mortgage/>}/>
            </Switch>
        </div>
    )
};
export default compose(withAuthRedirect)(Education);
