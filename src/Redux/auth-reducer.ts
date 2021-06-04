import {loginAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_INFO = 'SET_AUTH_INFO';

type StartStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
let startState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = startState, action: any): StartStateType => {
    switch (action.type) {
        case SET_AUTH_INFO :
            return {...state, ...action.AuthInfo}
        default:
            return state
    }
};
type SetAuthInfoType = {
    type: typeof SET_AUTH_INFO
    AuthInfo: StartStateType
}
export const setAuthInfo = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthInfoType => (
    {type: SET_AUTH_INFO, AuthInfo: {id, login, email, isAuth}});

export const getUserData = () => async (dispatch: any) => {
    let response = await profileAPI.getAuthInfo()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthInfo(id, login, email, true))
    }
};
export const loginThunk = (formData: any) => async (dispatch: any) => {
    let response = await loginAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(getUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};
export const logoutThunk = () => async (dispatch: any) => {
    let response = await loginAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthInfo(null, null, null, false));
    }

};

export default authReducer;