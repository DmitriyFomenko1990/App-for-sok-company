import React from "react";
import style from './Object.module.scss';
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../../../img/objects/2_1.jpg"
import img2 from "../../../../img/objects/7a807ea6bf171b3c0046baf754b81915asdasdasd5b7ea7cb7dcd81.37289647-650x433-7a807ea6bf171b3c0046baf754b81915.jpg"
import img3 from "../../../../img/objects/156186561.jpg"
import img4 from "../../../../img/objects/267738737.jpg"
import img5 from "../../../../img/objects/6087258608.jpg"
import {Button} from "react-bootstrap";
const MyObject = () => {
    return (
        <div className={style.container}>
            <div className={style.head}>
                <div className={style.carousel}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                width={600}
                                height={400}
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                width={600}
                                height={400}
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                width={600}
                                height={400}
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                width={600}
                                height={400}
                                src={img4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                width={600}
                                height={400}
                                src={img5}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={style.contacts}>
                    <ul>
                        <li>Цена: 10 000 000 руб</li>
                        <li>Менеджер: Иван Иваныч</li>
                        <li>тел: 8 888 888 88 88</li>
                        <li>Адрес: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, rem!</li>
                    </ul>
                    <div className={style.buttons}>
                        <Button variant="primary">Редактировать</Button>
                        <Button variant="danger">Удалить</Button>
                    </div>
                </div>
            </div>

            <div className={style.info}>
                <h4>Описание:</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur assumenda
                consequuntur corporis cumque debitis doloremque ea eius eos et ex illum ipsam iusto maiores
                necessitatibus nihil odio optio pariatur possimus provident quae quas, quibusdam saepe suscipit
                temporibus veritatis voluptatem. Ab accusamus accusantium assumenda, at consequatur debitis deserunt
                dicta dolore, doloremque doloribus ducimus earum ex excepturi, illum in ipsum iusto minima minus
                mollitia necessitatibus nesciunt odit officia omnis quidem sequi soluta totam. Blanditiis cum
                cumque dicta dignissimos eaque eum illum iste itaque laborum laudantium magnam minima, molestias
                officia possimus quos sapiente suscipit totam veritatis! Commodi doloremque facilis fugit quas?</p>
        </div>
    )
}
export default MyObject;