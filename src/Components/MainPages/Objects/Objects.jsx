import React from "react";
import style from './Objects.module.scss';
import image from "../../../img/objects/2_1.jpg"
import {NavLink} from "react-router-dom";

const Objects = () => {
    return (
        <div className={style.container}>
            <div className={style.options}>
                <ul>
                    <li>комнат</li>
                    <form>
                        <input type="text"/>
                    </form>
                    <li>цена</li>
                    <form>
                        <input type="number"/>
                    </form>
                </ul>
            </div>
            <div className={style.objectsWrapper}>

                <div className={style.object}>

                        <div>
                            <NavLink to='/id1'><img className={style.img} src={image}/></NavLink>
                        </div>
                        <div className={style.description}>
                            <ul>
                                <li>Цена: 10 000 000 руб.</li>
                                <li>Комнат: 3</li>
                                <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
                                    magni?
                                </li>
                                <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                    sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                                </li>
                            </ul>
                        </div>

                </div>

                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.object}>
                    <div>
                        <img className={style.img} src={image}/>
                    </div>
                    <div className={style.description}>
                        <ul>
                            <li>Цена: 10 000 000 руб.</li>
                            <li>Комнат: 3</li>
                            <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, magni?</li>
                            <li>Описание: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsa
                                sint. Assumenda aut eligendi magni quisquam repudiandae voluptatem, voluptatibus!
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Objects;