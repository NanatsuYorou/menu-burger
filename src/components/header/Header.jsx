import React, { useState } from "react";
import logo from '../../images/logo.svg'
import css from  './css/header.module.css'
import menuSVG from '../../images/icon-menu.svg'
import closeMenuSVG from '../../images/icon-close-menu.svg'
import arrowSVG from '../../images/icon-arrow-down.svg'
import todoSVG from '../../images/icon-todo.svg'
import remindersSVG from '../../images/icon-reminders.svg'
import planningSVG from '../../images/icon-planning.svg'
import calendarSVG from '../../images/icon-calendar.svg'

export const Header = () => {
    
const [menuIsShown, toggleMenu] = useState(false)
    
function burgerClick(){
    let menu_list = document.querySelector(`.${css['menu__list']}`)
    menu_list.classList.toggle(css['active'])
    toggleMenu(!menuIsShown)
}

function openSublist(event){
    // Перевернуть стрелку нажатого пункта
    event.currentTarget.classList.toggle(css['open'])
    // Раскрыть связанный с нажатым пунктом по data-id подсписок 
    let sublistClass = event.currentTarget.id
    let sublist = document.querySelector(`[data-id="${sublistClass}"]`)
    sublist.classList.toggle(css['open'])
}

    return(
        <header>
            <div className={css["header__container"]}>
                <div className={css["header__logo"]}>
                    <img src={logo} alt="" />
                </div>
                <div className={css["header__menu"]}>
                    <ul className={css["menu__list"]}>
                        <li className={css["menu__item"]}>  
                            <p id="features" onClick={openSublist}>Features</p>
                            <img src={arrowSVG} alt="" />
                            <ul data-id="features" className={css["sublist"] + ' ' + css["features"]}>
                                <li style={{listStyleImage: `url(${todoSVG})`}} className={css["sublist__item"]}><a href="">Todo List</a></li>
                                <li style={{listStyleImage: `url(${calendarSVG})`}} className={css["sublist__item"]}><a href="">Calendar</a></li>
                                <li style={{listStyleImage: `url(${remindersSVG})`}} className={css["sublist__item"]}><a href="">Reminders</a></li>
                                <li style={{listStyleImage: `url(${planningSVG})`}} className={css["sublist__item"]}><a href="">Planning</a></li>
                            </ul>
                        </li>
                        <li className={css["menu__item"]}>  
                            <p id="company" onClick={openSublist}>Company</p>
                            <img src={arrowSVG} alt="" />
                            <ul data-id="company" className={css["sublist"] + ' ' + css["company"]}>
                                <li className={css["sublist__item"]}><a href="">History</a></li>
                                <li className={css["sublist__item"]}><a href="">Our Blog</a></li>
                                <li className={css["sublist__item"]}><a href="">Team</a></li>
                            </ul>   
                        </li>
                        <li className={css["menu__item"]}>  
                            <p><a href="">Careers</a></p>
                        </li>
                        <li className={css["menu__item"]}>  
                            <p><a href="">About</a></p>
                        </li>
                        <li className={css["menu__item"]}>
                            <a href="">Login</a>
                            <a href="">Register</a>
                        </li>
                    </ul>
                    <div className={css["menu__burger"]} onClick={burgerClick}>
                    { menuIsShown ? <img src={closeMenuSVG} alt="" /> : <img src={menuSVG} alt="" />}
                    </div>
                </div>
            </div>
        </header>
    )
}