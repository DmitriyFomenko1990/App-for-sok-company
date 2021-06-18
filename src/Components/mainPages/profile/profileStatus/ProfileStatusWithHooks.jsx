import React, {useEffect, useState} from "react";
import style from './Status.model.css';

const ProfileStatusWithHooks = (props) => {
    const [isEditStatus, setIsEditStatus] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    },[props.status]);

    const onEditStatus = () => setIsEditStatus(true);

    const onHandleChange = event => setStatus(event.target.value);

    const onChangedStatus = () => {
        setIsEditStatus(false);
        props.updateStatus(status);
    }
    return <div className={style.edit}>
        {props.isOwner
        ? !isEditStatus
                ? <div onClick={onEditStatus} className={style.edit} >{status || "Нет статуса"}</div>
                : <input value={status} onChange={onHandleChange} onBlur={onChangedStatus} autoFocus={true}/>

        : <div className={style.edit} >{status || "Нет статуса"}</div>}

    </div>
}
export default ProfileStatusWithHooks;