import React from "react";
import style from './Objects.module.scss';
import image from "../../../img/objects/2_1.jpg"
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

const Objects = () => {
    return (
        <div className={style.container}>
            <div className={style.options}>
                <ul>
                    <li>Комнат:</li>
                    <form className={style.checkbox}>
                        <div>
                            <input type="checkbox" id="studio" name="studio"/>
                            <label htmlFor="studio">студия</label>
                        </div>
                        <div>
                            <input type="checkbox" id="oneRoom" name="oneRoom" />
                            <label htmlFor="oneRoom">1 комнатная</label>
                        </div>
                        <div>
                            <input type="checkbox" id="twoRoom" name="twoRoom" />
                                <label htmlFor="twoRoom">2 комнатная</label>
                        </div>
                        <div>
                            <input type="checkbox" id="threeRoom" name="threeRoom" />
                            <label htmlFor="threeRoom">3 комнатная +</label>
                        </div>
                        <div>
                            <input type="checkbox" id="house" name="house" />
                            <label htmlFor="house">Дома</label>
                        </div>
                    </form>
                    <li>Цена:</li>
                    <form>
                        <span>от: </span><input type="number"/>
                        <br/><br/>
                        <span>до: </span><input type="number"/>
                    </form>
                </ul>
                <Button variant="success">Новый объект</Button>
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