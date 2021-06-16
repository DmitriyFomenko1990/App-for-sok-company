import React from 'react';
import style from './news.module.scss';
import logo from '../../../img/logo3.jpg'
import {Button} from "react-bootstrap";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const News = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div><h5>Новости:</h5></div>
                <div><Button variant="success">Добавить новость <strong>+</strong></Button></div>
            </div>
            <div className={style.news}>
                <div className={style.news_head}>
                    <div>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className={style.headInfo}>
                        <p>Имя Фамилия</p>
                        <p>{new Date().toLocaleString()}</p>
                    </div>
                    <hr/>
                </div>
                <div className={style.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut consectetur culpa cumque
                        distinctio dolorem esse facere id in ipsa labore laborum magni molestiae odit omnis quisquam
                        recusandae sapiente, tempore ut voluptatem? Aliquid, cumque dolore esse quas quidem similique
                        unde veniam. Alias aliquam assumenda consequuntur debitis, dolore ipsam iure maxime minus
                        officiis praesentium quam quibusdam recusandae reprehenderit unde voluptatem? Architecto eaque
                        et facere inventore rerum. Alias, debitis dolorum esse hic, illum ipsa magnam molestias, nemo
                        recusandae rerum suscipit temporibus veritatis? Adipisci alias aperiam deserunt dolor doloribus
                        eius eos harum hic illum maiores neque, non officia optio praesentium sapiente tempore
                        veritatis.</p>
                </div>
            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(News);