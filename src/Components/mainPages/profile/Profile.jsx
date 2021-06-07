import React from "react";
import HeadData from './profileHeadData/HeadData';
import style from './Profile.module.scss';
import InputFormContainer from "./inputForm/InputFormConteiner.js";

const Profile = (props) => {
    return (
        <div className={style.profileWrapper}>
             <HeadData isOwner={props.isOwner}
                       updatePhoto={props.updatePhoto}
                       updateStatus={props.updateStatus}
                       status={props.status}
                       data={props.data}/>
            <InputFormContainer />
            {Posts(props.postsObj)}
        </div>
    )
};
const Post = props =>  <div>{props.message}</div>;

function Posts(Arrey) {
    return Arrey.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id} />)
}
export default Profile;
