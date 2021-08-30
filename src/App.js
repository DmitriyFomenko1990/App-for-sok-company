import React from "react";
import style from "./App.module.scss";
import Header from './Components/header/Header';
import Objects from "./Components/mainPages/objects/Objects";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Education from "./Components/mainPages/education/Education";
import Developers from "./Components/mainPages/developers/Developers";
import ProfileContainer from "./Components/mainPages/profile/ProfileContainer";
import UsersContainer from "./Components/mainPages/users/UsersContainer";
import LoginPage from "./Components/mainPages/loginPage/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./tools/Preloader";
import Developer from "./Components/mainPages/developers/developer/Developer";
import NotFound from "./tools/NotFound";
import MyObject from "./Components/mainPages/objects/object/Object";
import News from "./Components/mainPages/news/News";

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error occurred");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={style.wrapper}>
                <Header className={style.header}/>
                <div className={style.content}>
                    <div className={style.content__wrapper}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                            <Route path='/objects' render={() => <Objects/>}/>
                            <Route path='/id1' render={() => <MyObject/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/developers' render={() => <Developers/>}/>
                            <Route path='/education/' render={() => <Education/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                            <Route path='/developer' render={() => <Developer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='*' render={() => <NotFound/>}/>
                        </Switch>
                    </div>
                </div>
                <div className={style.footer}>Footer</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
