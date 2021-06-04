import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import DocList from "./DocList";
import style from "../Education.module.scss"
import Tariffs from "./Tariffs";
import Instruction from "./Instruction";
import ClientStatus from "./ClientStatus";
import Objection from "./Objection";

const Mortgage = () => {
    return (
        <div className={style.mortgage}>
            <div className={style.rightNav}>
                <ul className={style.rightNav_list}>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/doc-list'>
                        Список документов
                    </NavLink></li>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/instruction'>
                        Пошаговая инструкция
                    </NavLink></li>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/client-status'>
                        Статус по ипотеки Юля
                    </NavLink></li>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/4'>
                        Список Застройщиков без пв
                    </NavLink></li>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/objection'>
                        Отработка возражений
                    </NavLink></li>
                    <li><NavLink activeClassName={style.active} to='/education/mortgage/tariffs'>
                        ТАРИФЫ открытия ипотеки у ЮЛИ
                    </NavLink></li>
                </ul>
            </div>
            <Switch>
                <Route path='/education/mortgage/doc-list' render={() => <DocList/>}/>
                <Route path='/education/mortgage/instruction' render={() => <Instruction/>}/>
                <Route path='/education/mortgage/client-status' render={() => <ClientStatus/>}/>
                <Route path='/education/mortgage/objection' render={() => <Objection/>}/>
                <Route path='/education/mortgage/tariffs' render={() => <Tariffs/>}/>
            </Switch>
        </div>
    );
};

export default Mortgage;