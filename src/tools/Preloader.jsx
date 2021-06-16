import React from 'react';
import preloaderImg from '../img/preloaderImg.gif'
import style from './Preloader.module.css'

const Preloader = () => {
        return  <img src={preloaderImg}  className={style.preloader} alt={'...'}/>
};
export default Preloader;