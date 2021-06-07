import React from "react";
import style from './Objects.module.scss';
import image from "../../../img/objects/2_1.jpg"
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

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
                            <input type="checkbox" id="oneRoom" name="oneRoom"/>
                            <label htmlFor="oneRoom">1 комнатная</label>
                        </div>
                        <div>
                            <input type="checkbox" id="twoRoom" name="twoRoom"/>
                            <label htmlFor="twoRoom">2 комнатная</label>
                        </div>
                        <div>
                            <input type="checkbox" id="threeRoom" name="threeRoom"/>
                            <label htmlFor="threeRoom">3 комнатная +</label>
                        </div>
                        <div>
                            <input type="checkbox" id="house" name="house"/>
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
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={style.card}>
                    <NavLink to='/id1'><Card.Img variant="top" src={image}/></NavLink>
                    <Card.Body className={style.cardBody}>
                        <Card.Title><strong>Цена:</strong> 10 000 000 р.</Card.Title>
                        <Card.Text>
                            <p><strong>Комнат:</strong> 3</p>
                            <p><strong>Адрес:</strong> Lorem ipsum dolor sit amet,
                                magni?</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}
export default Objects;