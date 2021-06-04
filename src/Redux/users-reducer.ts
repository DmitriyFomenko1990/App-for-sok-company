import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const UPDATE_PAGE = 'UPDATE_PAGE';
const IS_RECEIVED = 'IS_RECEIVED';

type UsersType = {
    name: string | null
    id: number | null
    photos: {
        small: string | null
        large: string | null
    },
    "status": string | null,
    "followed": boolean
}

let startState = {
    users: [] as Array<UsersType>,
    numberUsersPerPage: 4,
    usersPageNumber: 1,
    totalUsers: 0,
    isReceivedStatus: false,
};

type StartStateType = typeof startState


const usersReducer = (state = startState, action: any): StartStateType => {
    switch (action.type) {
        case 'SET_USERS' :
            return {...state, users: [...action.users]}
        case 'SET_TOTAL_COUNT' :
            return {...state, totalUsers: action.totalCount}
        case 'UPDATE_PAGE' :
            return {...state, usersPageNumber: action.page}
        case 'IS_RECEIVED' :
            return {...state, isReceivedStatus: action.isReceived}
        default:
            return state
    }
};

type SetUsersActionType = {
    type: typeof SET_USERS
    users: UsersType
}
type SetTotalUsersActionType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
type UpdatePageActionType = {
    type: typeof UPDATE_PAGE
    page: number
}
type IsReceivedActionType = {
    type: typeof IS_RECEIVED
    isReceived: boolean
}

export const setUsers = (users: UsersType): SetUsersActionType => ({type: SET_USERS, users: users});
export const setTotalUsers = (totalCount: number): SetTotalUsersActionType => ({type: SET_TOTAL_COUNT, totalCount});
export const updatePage = (page: number): UpdatePageActionType => ({type: UPDATE_PAGE, page});
export const isReceived = (isReceived: boolean): IsReceivedActionType => ({type: IS_RECEIVED, isReceived});

export const requestUsers = (usersPageNumber: number, numberUsersPerPage:number) => async (dispatch: any) => {
    dispatch(isReceived(true));
    let data = await usersAPI.getUsers(usersPageNumber, numberUsersPerPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
    dispatch(isReceived(false));
};
export default usersReducer;
