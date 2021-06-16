import React from "react";
import smallAva from "../../img/smallAva.png";
import style from "./Login.module.scss";
import {Button} from "react-bootstrap";

const Login = (props) => {
    if (!props.userData.isAuth) {
        return <div></div>
    }
    return (<div className={style.log}>
        <div className={style.logoWrapper}>
            <img src={smallAva} alt={'Аватар'}/>
            <div className={style.name}>{props.userData.login}</div>
        </div>
        <Button variant="outline-danger" onClick={props.onLogout}>Выйти</Button>
    </div>)
}
export default Login;