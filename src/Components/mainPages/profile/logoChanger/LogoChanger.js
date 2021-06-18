import React from 'react';
import style from './logoChanger.module.scss'

const LogoChanger = ({onChangePhoto, activeInput, setActiveInput}) => {
    return (
        <div className={style.changerWrapper}>
            <input className={style.inputLogo} type={"file"} onChange={onChangePhoto}
                   onMouseOver={() => setActiveInput(!activeInput)}
                   onMouseLeave={() => setActiveInput(!activeInput)}/>
            <button className={ activeInput ? `${style.btnLogo} ${style.active}` : style.btnLogo}>Изменить</button>
        </div>
    );
};
export default LogoChanger;