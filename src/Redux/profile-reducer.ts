import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_DATA = 'SET_DATA';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

type PostsType ={
    id: number
    message: string
}
type ContactsType ={
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PhotosType ={
    small: string | null
    large: string | null
}
type DataPersonType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos:  PhotosType
}

let startState = {
    posts: [
        {id: 1, message: 'post1'},
        {id: 2, message: 'post2'},
        {id: 3, message: 'post3'},
        {id: 4, message: 'post4'},
    ] as Array<PostsType>,
    dataPerson: null as DataPersonType | null,
    status: 'Нет статуса',
};
export type StartStateType = typeof startState

const profileReducer = (state = startState, action: any): StartStateType => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {id: 1, message: action.postText, likeCount: 0}
            return {...state, posts: [...state.posts, newPost]}
        case SET_DATA :
            return {...state, dataPerson: action.data}
        case SET_STATUS :
            return {...state, status: action.status}
        case SAVE_PHOTO :
            return {...state, dataPerson: {...state.dataPerson, photos: action.photoFile} as DataPersonType}
        default:
            return state
    }
};

type AddPostActionType = {
    type: typeof ADD_POST
    postText: string
}
type SetDataActionType = {
    type: typeof SET_DATA
    data: DataPersonType
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
type SavePhotoActionType = {
    type: typeof SAVE_PHOTO
    photoFile: PhotosType
}
export const addPost = (postText: string): AddPostActionType => ({type: ADD_POST, postText});
export const setData = (data: DataPersonType): SetDataActionType => ({type: SET_DATA, data});
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
export const savePhoto = (photoFile: PhotosType): SavePhotoActionType => ({type: SAVE_PHOTO, photoFile});

export const getProfileData = (userID: number) => async (dispatch: any) => {
    let data = await profileAPI.getUserData(userID);
    dispatch(setData(data));
};
export const getStatus = (userID: number) => async (dispatch: any) => {
    let status = await profileAPI.getStatus(userID);
    dispatch(setStatus(status.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.pushStatus(status);
    if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export const updatePhoto = (photoFile: any) => async (dispatch: any) => {
    let response = await profileAPI.pushPhoto(photoFile);
    if (response.data.resultCode === 0) dispatch(savePhoto(response.data.data.photos));
};

export default profileReducer;