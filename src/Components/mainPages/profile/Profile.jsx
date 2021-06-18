import React, {useState} from "react";
import style from './Profile.module.scss';
import Preloader from "../../../tools/Preloader";
import logo from "../../../img/logo1.jpg";
import ProfileStatusWithHooks from "./profileStatus/ProfileStatusWithHooks";
import LogoChanger from "./logoChanger/LogoChanger";

const Profile = (props) => {
    const [activeInput, setActiveInput] = useState(false)
    let onChangePhoto = (event) => {
        if (event.target.files.length)  props.updatePhoto(event.target.files[0])
    };
    if (!props.data  ){
        return <Preloader />
    } else
        return (
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img alt={"err"} className={style.imageLogo}
                         src ={  (props.data.photos.large ? props.data.photos.large : logo)}
                         onMouseOver={() => setActiveInput(!activeInput)}
                         onMouseLeave={() => setActiveInput(!activeInput)}/>
                    {props.isOwner && <LogoChanger onChangePhoto={onChangePhoto}
                                                   activeInput={activeInput}
                                                   setActiveInput={setActiveInput}/>}
                </div>
                <div className={style.profileData}>
                    <div className={style.status}><ProfileStatusWithHooks
                        updateStatus={props.updateStatus}
                        status={props.status}
                        isOwner={props.isOwner}/></div>
                    <div className={style.name}>{props.data.fullName}</div>
                    <div>
                        <ul className={style.profilList}>
                            <li><strong>Info:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae blanditiis consequatur deserunt eligendi excepturi laborum, necessitatibus quis recusandae sunt!{props.data.lookingForAJobDescription}</li>
                            <li><strong>about me:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quod.</li>
                            <li><strong>Education:</strong> Lorem ipsum dolor.</li>
                            <li><strong>webSite:</strong> Lorem ipsum.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
};

export default Profile;
