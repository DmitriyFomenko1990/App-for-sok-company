import React from 'react';
import style from "../Education.module.scss";

const ClientStatus = () => {
    return (
        <div className={style.content}>
            <h2 className={style.header}>Статус по ипотеки Юля</h2>
            <a  href='https://docs.google.com/spreadsheets/d/1JTrx2_EfigVJpzLi-HX4u6yqTGGvtJQicVjvoYuZONE/edit#gid=899883666'
                className={style.clientStatus} target={'_blank'} rel="noreferrer">
                Статус по клиентам
            </a>
        </div>
    );
};

export default ClientStatus;