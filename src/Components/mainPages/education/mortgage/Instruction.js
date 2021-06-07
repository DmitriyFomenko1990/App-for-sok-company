import React from 'react';
import style from "../Education.module.scss";

const Instruction = () => {
    return (
        <div className={style.content}>
            <h2 className={style.header}>Пошаговая инструкция</h2>
            <ul className={style.numberList}>
                <li className="numList">
                    Анализ желаний и возможностей. Прежде всего, заемщик должен трезво оценить свои шансы. Итак,
                    необходимо выяснить:
                    <ul className={style.diskList}>
                        <li>Сколько есть денег на первый взнос</li>
                        <li>Какой стоимости примерно будет жилье</li>
                        <li>Какой размер ежемесячных взносов возможен</li>
                        <li>Какой размер кредита потребуется</li>
                        <li>На какой срок планируется взять ипотеку.</li>
                    </ul>
                    <p>Нужно внимательно все подсчитать и прикинуть примерные суммы, размеры и сроки.</p>
                </li>
                <li className="numList">
                    Выбор банка и ипотечной программы. Если ипотечные программы во всех кредитных организациях примерно
                    одинаковые, то их условия могут немного отличаться, в связи с этим, выбирая банк, необходимо
                    опираться два
                    основных критерия:
                    <ul className={style.diskList}>
                        <li>подходят ли заемщику условия банка</li>
                        <li>подходит ли заемщик требованиям банка.</li>
                    </ul>
                    <p>Прежде всего, заемщик может узнать общие условия кредитования каждого отдельного банка в
                        Интернете. Затем, сузив круг, пройтись по тем кредитным организациям, которые больше всего
                        отвечают его
                        запросам. В отделении банка необходимо сделать следующее:</p>
                    <ul className={style.diskList}>
                        <li>Узнать, какие документы нужны для ипотеки</li>
                        <li>Какие требования к недвижимости – объекту залога</li>
                        <li>Процент по ипотечному кредиту</li>
                        <li>Попросить рассчитать ежемесячные платежи на несколько вариантов суммы и срока ипотеки</li>
                        <li>Наличие комиссий</li>
                        <li>Срок рассмотрения заявки.</li>
                    </ul>
                    <p>Выдавая ипотечные займы, банк тоже рискует, деньги выдаются не каждому. Поэтому заем кредитная
                        организация выдвигает определенные требования и условия к заемщику и квартире. Потенциальный
                        клиент банка должен выяснить, соответствует ли он и его доходы требованиям банка.</p>
                </li>
                <li className="numList">
                    Сбор и подготовка документов. Выбрав подходящий банк, необходимо подать заявку на оформление
                    ипотечного кредита. Вместе с заявлением в кредитную организацию предоставляется пакет документов:
                    <ul className={style.diskList}>
                        <li>Справка о доходах</li>
                        <li>Копия паспорта</li>
                        <li>Копия трудовой книжки и др.</li>
                    </ul>
                    <p>Решение о выдаче ипотечного займа может занять от 2 дней до 2 месяцев.</p>
                </li>
                <li className="numList">
                    Поиск подходящей недвижимости. Предварительно выяснив требования банка к залоговому жилью, заемщик
                    может приступить к поиску и выбору квартиры в новостройке или на вторичном рынке. Необходимо найти
                    не
                    только о жилье, которое будет устраивать и заемщика, и банк, но и продавца, готового работать с
                    ипотекой.
                    После выбора квартиры, необходимо принести в кредитную организацию второй пакет документов, который
                    будет
                    включать:
                    <ul className={style.diskList}>
                        <li>Страховку объекта залога</li>
                        <li>Независимую оценку</li>
                        <li>Предварительный договор купли-продажи</li>
                        <li>Согласие на продажу всех собственников жилья</li>
                        <li>Свидетельство о регистрации права собственности</li>
                        <li>Кадастровый паспорт</li>
                        <li>Выписка из домовой книги.</li>
                    </ul>
                    <p>После проверки всех документов, заемщик получает о выдаче ссуды.</p>
                </li>
                <li className="numList">
                    Заключение кредитного договора. В назначенный день заемщик заключает кредитный договор с банком, а
                    также договор купли-продажи с продавцом квартиры. Продавец получает свои деньги, банк – залог, а заемщик
                    – квартиру и задолженность по ипотеке. После этого документы подаются на государственную регистрацию. По
                    истечении 5 дней заемщик получает документы о праве собственности на недвижимость, однако полное право
                    на жилье он получит только после того, как выполнит все кредитные обязательства перед банком.
                    <br/><br/>
                    <strong>Для получения ипотечного кредита для приобретения жилья потребуется начальный взнос в размере от 10% его
                    цены.</strong>
                    <br/><br/>
                    Как получить ипотеку, понятно из схемы процесса ипотечного кредитования:
                    <ul className={style.diskList}>
                        <li>выбрав жилую недвижимость, заемщик обращается в банк;</li>
                        <li>к кредитной заявке прилагает пакет основных и дополнительных документов;</li>
                        <li>после одобрения ипотечной заявки банк исследует объекта залога;</li>
                        <li>залог передается для оценки недвижимости в независимое агентство;</li>
                        <li>после анализа всей информации банк принимает решение;</li>
                        <li>оформляется и подписывается кредитный договор;</li>
                        <li>заемщик вносит первоначальный взнос;</li>
                        <li>производится страхование залога, жизни заемщика;</li>
                        <li>банк перечисляет деньги продавцу;</li>
                        <li>на залог налагается отягощение.</li>
                    </ul>
                </li>
                <h4>Требования к заемщику по ипотеке</h4>
                <p>К получателям ипотечных кредитов требования менее жесткие. Это объясняется наличием ликвидного залога.
                    Если заемщик не платит по обязательствам, банк имеет возможность изъять и продать залог. Также они
                    требуют наличие гражданства РФ, ограничивают возраст заемщика от 21 до 60 лет. Желательна постоянная
                    регистрация в регионе работы банковского учреждения. Справка о доходах заемщика должна подтвердить банку
                    возможность своевременного погашения ипотечной ссуды. Дополнительными причинами выдачи кредита служат
                    наличие автомобиля, других объектов в собственности.</p>
                <h4>Получение стабильного официального дохода</h4>
                <p>Для получения одобрения и предоставления ипотечного кредита суммы ежемесячных выплат по ипотеке не
                    должны превышать 40-45% совокупного месячного дохода семьи заемщика. Из этого следует требование по
                    минимальной зарплате. Заемщик должен предоставить справку о доходе по форме 2-НДФЛ или по форме
                    финучреждения, заверенную руководителем, главным бухгалтером и печатью предприятия. Многие банковские
                    организации учитывают дополнительные доходы, полученные из разных источников.</p>
                <h4>Стаж работы</h4>
                <p>Особых требований к стажу работы заемщика банкиры не предъявляют. Он должен работать не менее 6 месяцев
                    на последнем месте работы. Длительность общего стажа работы влияет на принятие решения, так как является
                    подтверждением возможности клиентом получать доходы и в дальнейшем. В последнее время страховые компании
                    начали страховать заемщиков от возможности потерять работу в период исполнения обязательств по займу.</p>
                <h4>Хорошая кредитная история</h4>
                <p>Своевременное исполнение кредитных обязательств, с просрочками не более 5-10 дней при этом – не более 3
                    раз в год, создадут вам положительную кредитную историю, имидж хорошего заемщика в будущем. Четкое
                    понимание хорошей кредитной истории в каждом финучреждении свое. Если вам отказало по этой причине одно,
                    обратитесь в другое. Хорошая информация о вас по данным Бюро кредитных историй обеспечит лучшие условия
                    по кредиту, быстрое принятие решения, меньший пакет необходимых документов. При плохой кредитной истории
                    рассчитывать на хорошие условия по ссуде не стоит.</p>
                <h4>Ликвидность залоговой недвижимости</h4>
                <p>Самый высокий уровень требований банковская организация предъявляет к залоговой недвижимости. Для
                    снижения своих рисков банк должен быть уверен в быстрой реализации залога по рассчитанной цене. Поэтому
                    банки неохотно берут для залога проблемную недвижимость, «хрущевки», участки и жилье на расстоянии более
                    50 км от областных и районных центров. Оценочная стоимость недвижимости может оказаться ниже рыночной
                    цены. Сумма первоначального взноса должна покрыть эту разницу и возместить затраты банка на изъятие, при
                    необходимости, у заемщика и продажу объекта залога.</p>
                <h4>Какие документы нужны, чтобы взять ипотеку</h4>
                <p>При оформлении ипотеки требуется предоставить следующие документы (максимальный список):</p>
                <h4>Оформление кредитного договора</h4>
                <p>С типовыми ипотечными договорами есть возможность ознакомиться на официальных сайтах банков. В некоторых
                    случаях возможны дополнения к договору, учитывающие особенности льготных программ для молодых семей,
                    военнослужащих, социально незащищенных категорий граждан. Общими для всех ипотечных контрактов является:</p>
                <ul className={style.diskList}>
                    <li>информация о заемщике и банке;</li>
                    <li>общая сумма займа;</li>
                    <li>предварительный платеж;</li>
                    <li>срок кредитования;</li>
                    <li>процентная ставка;</li>
                    <li>график погашения;</li>
                    <li>пени и штрафы при нарушении выплат;</li>
                    <li>контактная информация.</li>
                </ul>
                <h4>Страхование жилья</h4>
                <p>Банковские учреждения дают кредит, но требуют застраховать залоговое имущество. Это требование исходит
                    из того, что залог является единственной гарантией возврата кредитных денег при отказе заемщика
                    выплачивать ипотеку. При частичной или полной утрате жилья заемщиком в период действия ипотечного
                    договора, страховая компания по договору страхования возместит банку недополученные средства по займу.</p>
                <h4>Что нужно для получения ипотеки по льготной программе</h4>
                <p>Ипотечные программы многих банков предлагают особые или льготные условия ипотеки отдельным категориям
                    граждан. Такие условия предлагаются в регионах для решения социальных и демографических проблем. Молодые
                    семьи, работники социальных служб, учителя, врачи, молодые научные кадры, военнослужащие-контрактники
                    могут претендовать на льготы по ипотеке от федеральных и региональных госструктур. Информация о том, как
                    взять ипотечный кредит и что нужно для ипотеки льготным категориям граждан, размещена на сайтах
                    банковских организаций.</p>
                <h4>Для молодых семей</h4>
                <p>Решение демографических проблем регионов производится льготными программами государственной поддержки
                    приобретения квартир молодым семьям. Брать кредит с льготами имеет право молодая семья, стоящая в
                    очереди на получение жилья. Данные программы включают скидки на первоначальный взнос, выгодную
                    процентную ставку, частичное погашение выплат по кредиту государством. Субсидии по программе «Молодой
                    семье – доступное жилье» для семей без детей составляют до 35%, и до 40% для семей с детьми. Минимальный
                    первоначальный взнос для них может быть уменьшен до 10-15%.</p>
                <h4>Социальная ипотека</h4>
                <p>Для социально-незащищенной части населения страны, учителей, медработников, сотрудников муниципальных
                    служб выдача кредита производится по льготным программам. Перечень социально значимых профессий для
                    страны включает научных, культурных работников, сотрудников военно-промышленного комплекса страны,
                    молодых специалистов на селе. Льготы и информация, как получить ипотеку таким работникам,
                    предоставляются региональными, муниципальными и федеральными органами власти, что зависит от
                    подчиненности социального работника.</p>
                <h4>Для военнослужащих</h4>
                <p>Для возможности получить ипотечный кредит на квартиру военнослужащими разработана программа
                    накопительно-ипотечной системы (НИС). По ее правилам в течение трех лет с момента регистрации в ней
                    производятся начисления. Эти средства могут быть потрачены для первого взноса по ипотеке. После
                    заключения ипотечного договора, его погашение осуществляется из НИС в течение периода действия контракта
                    для военнослужащего.</p>
                <h4>Как получить ипотеку военнослужащему российских вооруженных сил, находящемуся на контракте, и основные
                    параметры государственной программы «Военная ипотека»:</h4>
                <ul className={style.diskList}>
                    <li>накопить средства с накопительно-ипотечной системой для первоначального взноса;</li>
                    <li>первый взнос – 10 % стоимости выбранной квартиры;</li>
                    <li>ставка по ипотеке – 12,5% годовых;</li>
                    <li>максимальная сумма – 2,4 миллиона рублей.</li>
                </ul>
                <h4>Как получить ипотечный кредит с материнским капиталом</h4>
                <p>При рождении или усыновлении второго ребенка семье начисляется «Материнский капитал». В 2020 году
                    программа материнского капитала будет изменена в соответствии с предложениями Президента В. Путина,
                    озвученными 15 января 2020 г. в послании Федеральному Собранию. Одним из предложенных изменений является
                    повышение величины материнского капитала при рождении второго ребенка на 150 тыс. руб. — то есть до 616
                    617 рублей.</p>
                <p>Президент предложил утвердить такие изменения «задним числом», начиная с 1 января 2020 г.
                    Соответственно, повышение мат. капитала коснется тех семей, в которых второй или последующий ребенок
                    рожден в 2020 году и позже. Направить эти средства по-прежнему можно будет по предусмотренным законом
                    направлениям.</p>
                <p>Пока получить сертификат на 616 617 руб. нельзя, так как законодательно такое изменение еще не
                    утвердили. Как сообщают в Совете Федерации и Госдуме, закон о внесении изменений в программу
                    материнского капитала будет одобрен примерно в марте-апреле 2020 года.</p>
                <p>Однако семья сейчас может оформить мат. капитал в его нынешнем размере, а после утверждения закона его
                    сумма автоматически вырастет на 150 тысяч. При этом бланк сертификата менять не нужно.</p>
                <p>Согласно заявлению Президента, с 1 января 2020 г. будут выдавать маткапитал на первенца в размере 466617
                    руб., а при рождении второго ребенка к этой сумме прибавят еще 150 тысяч. Таким образом, общая сумма
                    материнского капитала составит 616617 рублей.</p>
                <p>Закон об увеличении материнского капитала на второго ребенка</p>
                <p>Анонсируя изменения в программе мат. капитала, Президент В. Путин сообщил, что увеличение суммы
                    сертификата на 150 000 рублей будет произведено с 1 января 2020 года, то есть «задним числом». При этом
                    по новому закону в целом будет скорректирована схема предоставления материнского капитала:</p>
                <p>Семья будет иметь право на получение сертификата сразу при рождении первого ребенка. МК на первенца
                    будет предоставляться в том размере, в котором он полагался ранее при рождении второго либо последующего
                    ребенка. После индексации с 01.01.2020 г. на 3% его размер составляет 466 617 рублей.</p>
                <p>При рождении в семье второго ребенка размер уже предоставленного на первенца мат. капитала увеличится на
                    150 тыс. руб. То есть в общей сложности семья получит 616 617 рублей.</p>
                <p>Будет ли увеличен на 150 тыс. руб. мат. капитал на ребенка, рожденного до 2020 года, пока неизвестно,
                    так как законопроект, предусматривающий такие изменения, еще не разработан и не одобрен. В ближайшее
                    время</p>
                <h4>На что можно потратить мат. капитал</h4>
                <p>Направления распоряжения средствами мат. капитала останутся прежними. Направить средства по-прежнему
                    можно будет по любые из перечисленных целей:</p>
                <ul className={style.diskList}>
                    <li>Улучшение жилищных условий семьи;</li>
                    <li>Ежемесячные выплаты в размере прожиточного минимума на второго ребенка в возрасте до 3 лет (так
                        называемые «путинские» выплаты);</li>
                    <li>Обучение детей;</li>
                    <li>Формирование накопительной пенсии мамы;</li>
                    <li>Приобретение товаров и услуг ребенку-инвалиду.</li>
                </ul>
                <p>Нужно отметить, что никаких изменений относительно источника финансирования «путинских» выплат на
                    второго ребенка не анонсировано. Предположительно, их так и продолжат платить за счет средств мат.
                    капитала. Однако точно станет известно после внесения законопроекта в Госдуму.</p>
            </ul>
        </div>
    );
};

export default Instruction;