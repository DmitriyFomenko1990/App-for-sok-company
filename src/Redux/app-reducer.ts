import {getUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
type StartStateType ={initialized: boolean}
let startState = {initialized: false};

const appReducer = (state = startState, action: any): StartStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {...state, initialized: true}
        default:
            return state
    }
};
type InitializedSuccessType = {type: typeof INITIALIZED_SUCCESS}
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch: any) => {
     await dispatch(getUserData())
        dispatch(initializedSuccess())
};
export default appReducer;
