import React from "react";
import  "./App.css";
import Header from './Components/Header/Header';
import Messages from "./Components/MainPages/Messages/Messages";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Education from "./Components/MainPages/Education/Education";
import Developers from "./Components/MainPages/Developers/Developers";
import ProfileContainer from "./Components/MainPages/Profile/ProfileContainer";
import UsersContainer from "./Components/MainPages/Users/UsersContainer";
import LoginPage from "./Components/MainPages/LoginPage/LoginPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/Tools/Preloader";
import Developer from "./Components/MainPages/Developers/Developer/Developer";
import Calc from "./Components/MainPages/Education/Calc/Calc";
import NotFound from "./Components/Tools/NotFound";

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
            <div className="wrapper">
                <Header className="header"/>
                <div className="content">
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/objects' render={() => <Messages/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/developers' render={() => <Developers/>}/>
                        <Route path='/education' render={() =><Education/>} />
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/developer' render={() => <Developer/>}/>
                        <Route path='/calc' render={() => <Calc/>}/>
                        <Route path='*' render={() => <NotFound/>}/>
                    </Switch>
                </div>
                <div className="footer">Footer</div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
