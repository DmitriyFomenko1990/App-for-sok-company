export const creditCalc = (cost, firstPay, creditTerm, percent) => {
    const result = {monthly: 0, credit: 0, pay: 0 };
    result.credit = cost - firstPay;
    const monthlyPercent = percent/100/12;
    const monthTerm = creditTerm * 12;
    const monthInc = monthlyPercent + 1;
    result.monthly = Math.round(result.credit * (monthlyPercent + (monthlyPercent/( Math.pow(monthInc, monthTerm) -1))));
    result.pay = Math.round(result.monthly * monthTerm);
    if (!result.monthly) result.monthly = 'Не могу посчитать';
    if (!result.pay) result.pay = 'Не могу посчитать';
    return result
};