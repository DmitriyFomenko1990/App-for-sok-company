import React from "react";
import style from "./App.module.scss";
import Header from './Components/header/Header';
import Objects from "./Components/mainPages/objects/Objects";
import {Route} from "react-router-dom";
import Education from "./Components/mainPages/education/Education";
import Developers from "./Components/mainPages/developers/Developers";
import ProfileContainer from "./Components/mainPages/profile/ProfileContainer";
import UsersContainer from "./Components/mainPages/users/UsersContainer";
import LoginPage from "./Components/mainPages/loginPage/LoginPage";

let SokAgency = () => {
    return (
        <div className={style.wrapper}>
                <Header className={style.header}/>
            <div className={style.content}>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <Objects/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/tools' render={() => <Developers/>}/>
                <Route path='/settings' component={Education}/>
                <Route path='/login' render={() => <LoginPage/>}/>
            </div>
            <div className={style.footer}>Footer</div>

        </div>
    );
};
export default SokAgency
