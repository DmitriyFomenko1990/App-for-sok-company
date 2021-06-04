import React from 'react';
import style from "../Education.module.scss";

const Tariffs = () => {
    return (
        <div className={style.content}>
            <h2 className={style.header}>ТАРИФЫ открытия ипотеки у ЮЛИ</h2>
            <ul className={style.numberList}>
                <li>Без аванса оплата по факту открытия, клиенты с обычными документами и обычной кредитной историей
                    ( не попадает сельская ипотека) - 5000</li>
                <li>Аванс и без возврата части альтернативные документы, плохая ки, сельская ипотека- 3000 аванс без
                    возвратный, 7000 услуга</li>
                <li>ИП и бизнес - 15 000</li>
                <li>Рефинансирование от 20 000</li>
            </ul>
            🧨 С ДОКУМЕНТАМИ ЮЛЮ НЕ ОБМАНЫВАЕМ ЭТО ВСЕГДА ОЧЕВИДНО
        </div>
    );
};

export default Tariffs;