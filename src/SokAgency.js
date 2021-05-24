import React from "react";
import style from "./App.css";
import Header from './Components/Header/Header';
import Messages from "./Components/MainPages/Messages/Messages";
import {Route} from "react-router-dom";
import Education from "./Components/MainPages/Education/Education";
import Developers from "./Components/MainPages/Developers/Developers";
import ProfileContainer from "./Components/MainPages/Profile/ProfileContainer";
import UsersContainer from "./Components/MainPages/Users/UsersContainer";
import LoginPage from "./Components/MainPages/LoginPage/LoginPage";


let SokAgency = (props) => {
    return (
        <div className={style.wrapper}>

                <Header className={style.header}/>


            <div className={style.content}>
                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <Messages/>}/>
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
