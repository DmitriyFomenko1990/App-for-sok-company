import React from "react";
import smallAva from "../../img/smallAva.png";
import style from "./Login.module.css";
import {Button} from "react-bootstrap";

const Login = (props) => {
    if (!props.userData.isAuth) {
        return <div>Войти</div>
    }
    return (<div className={style.log}>
        <img src={smallAva} alt={'Аватар'}/>
        <div className={style.name}>{props.userData.login}</div>
        <Button variant="outline-danger" onClick={props.onLogout}>Выйти</Button>
    </div>)
}
export default Login;