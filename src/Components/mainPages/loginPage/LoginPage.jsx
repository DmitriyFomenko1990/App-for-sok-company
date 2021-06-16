import React from "react";
import {Field, reduxForm} from "redux-form";
import style from "./LoginPage.module.scss";
import styleErr from "../../../tools/FormsControls.module.css";
import {alphaNumeric, minLength5, required} from "../../utilities/validators/formValidator";
import {Input} from "../../../tools/FormsControls";
import {connect} from "react-redux";
import {loginThunk} from "../../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={style.form}>
        <div><Field placeholder={'Login'}
                    name={'email'}
                    type={'input'}
                    component={Input}
                    validate={[required, minLength5]}
                    className={style.field}/></div>
        <div><Field placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required, minLength5, alphaNumeric]}
                    className={style.field}/></div>
        {props.error && <div className={styleErr.formSummaryError}>{props.error}</div>}
        <div className={style.remember}><Field  className={style.remember}
                    component={Input}
                    name={'rememberMe'}
                    type={'checkbox'}/><span className={style.checkBoxText}>remember me</span></div>
        <div>
            <button className={style.button} >Войти</button>
        </div>
    </form>
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};
export default connect(mapStateToProps, {loginThunk})(LoginPage);


