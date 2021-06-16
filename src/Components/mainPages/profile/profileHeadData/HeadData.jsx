import React from "react";
import style from "./HeadData.module.scss";
import Preloader from "../../../../tools/Preloader";
import logo from "../../../../img/logo1.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const HeadData = (props) => {
    let onChangePhoto = (event) => {
       if (event.target.files.length)  props.updatePhoto(event.target.files[0])
    };
    if (!props.data  ){
        return <Preloader />
    } else
    return (
        <div className={style.profileHeader}>
            <div className={style.logo}><img alt={"err"} className={style.imageLogo}
                      src ={  (props.data.photos.large ? props.data.photos.large : logo)} />
                {props.isOwner && <input type={"file"} onChange={onChangePhoto} />}
            </div>
            <div className='profilData'>
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
export default HeadData;