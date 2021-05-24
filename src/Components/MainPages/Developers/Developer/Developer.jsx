import React from "react";
import style from "./developer.module.css"
import {NavLink} from "react-router-dom";
import ask from "../../../../img/developers/ask.png"



const Developer = () => {
  return (
    <div className={style.developer}>
      <div className={style.logo}>
       <img className={style.logo_img} src={ask} alt={'logo'}/>
      </div>
      <div className={style.contacts}>
          <h1 className={style.title}>АСК</h1>
        <ul className={style.list}>
          <li>Менеджер: dscsdv sdvvew</li>
          <li>тел: 888888888</li>
          <li className={style.checks}>Шахматка</li>
          <li>Сайт застройщика: https://realsok.ru/</li>
          <li>еще что нибудь: СВОЯ БАЗА С ЛЮБЫМИ ВИДАМИ НЕДВИЖИМОСТИ
              Лучшая база по поиску недвижимости Краснодара от собственников и частных лиц, созданная специально для НАС!</li>
        </ul>
      </div>
    </div>
  )
}
export default Developer