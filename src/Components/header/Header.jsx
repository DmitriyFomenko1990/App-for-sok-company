import React, {useState} from "react";
import style from "./Header.module.scss";
import Navigation from "../navigation/Navigation";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    console.log(setMenuActive)
    return (
        <header className={style.container}>
            <div className={style.burger} onClick={() => setMenuActive(!menuActive)}>
                <span className={style.lines} />
            </div>
            <Navigation menuActive={menuActive} setMenuActive={setMenuActive}/>
        </header>
    )
};
export default Header;