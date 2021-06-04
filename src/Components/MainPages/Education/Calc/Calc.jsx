import React, {useState} from "react";
import style from './Calc.module.css'
import {creditCalc} from "../../../Tools/creditCalc";



const Calc = () => {
    const [cost, setCost] = useState(3000000)
    const [firstPay, setFirstPay] = useState(450000)
    const [creditTerm, setCreditTerm] = useState(20)
    const [percent, setPercent] = useState(9)

    const onChangeCost = (event) =>  setCost(event.target.value)
    const onChangeFirstPay = (event) =>  setFirstPay(event.target.value)
    const onChangeCreditTerm = (event) =>  setCreditTerm(event.target.value)
    const onChangePercent = (event) =>  setPercent(event.target.value)


    const result = creditCalc(cost, firstPay, creditTerm, percent)

    return (
        <div className={style.container}>
            <h1 className={style.title}>Ипотечный калькулятор</h1>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <form>
                        <div className={style.inputBlock}>
                        <h4>Стоимость объекта:</h4>
                        <input
                            className={style.inputCalc}
                            type={'number'}
                            value={cost}
                            name={'cost'}
                            onChange={onChangeCost}
                        />
                        </div>
                        <h4>Первый взнос:</h4>
                        <input
                            className={style.inputCalc}
                            type={'number'}
                            value={firstPay}
                            name={'firstPay'}
                            onChange={onChangeFirstPay}
                        />
                        <h4>Срок:</h4>
                        <input
                            className={style.inputCalc}
                            type={'number'}
                            value={creditTerm}
                            name={'creditTerm'}
                            onChange={onChangeCreditTerm}
                        />
                        <h4>Процентная ставка:</h4>
                        <input
                            className={style.inputCalc}
                            type={'number'}
                            value={percent}
                            name={'percent'}
                            onChange={onChangePercent}
                        />
                    </form>
                </div>
                <div className={style.result}>
                    <div>
                        <ul className={style.list}>
                            <li>Ежемсячный платеж: {result.monthly} руб.</li>
                            <li>Сумма кредита: {result.credit} руб.</li>
                            <li>Общая выплата: {result.pay} руб.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calc