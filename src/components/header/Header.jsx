import React, { useState } from "react";
import logo from '../../images/logo.svg'
import css from  './css/header-mobile.module.css'
import menuSVG from '../../images/icon-menu.svg'
import closeMenuSVG from '../../images/icon-close-menu.svg'
import arrowSVG from '../../images/icon-arrow-down.svg'
import todoSVG from '../../images/icon-todo.svg'
import remindersSVG from '../../images/icon-reminders.svg'
import planningSVG from '../../images/icon-planning.svg'
import calendarSVG from '../../images/icon-calendar.svg'


export const Header = () => {
    
const [menuIsShown, showMenu] = useState(false)

    
function toggleMenu(){
    let menu_list = document.querySelector(`.${css['menu__wrapper']}`)
    menu_list.classList.toggle(css['active'])

    let menu__background = document.querySelector(`.${css['menu__background']}`)
    menu__background.classList.toggle(css['active'])

    closeThem()

    showMenu(!menuIsShown)
}

function closeThem(){
    let array = document.querySelectorAll(`.${css['open']}`)
    for (let i = 0; i < array.length; i++) {
        array[i].classList.toggle(css['open'])
    }
}

function openSublist(event){
    // Массив уже открытых подсписков
    let open_sublists = document.querySelectorAll(`ul.${css['open']}`)
    // Id текущего подсписка
    let sublistId = event.currentTarget.id

    // Раскрыть связанный с нажатым пунктом по data-id подсписок 
    let sublist = document.querySelector(`[data-id="${sublistId}"]`)
    sublist.classList.toggle(css['open'])

    // Закрыть все открытые подсписки кроме текущего
    for (let i = 0; i < open_sublists.length; i++) {
        if(open_sublists[i].dataset.id !== sublistId)
            open_sublists[i].classList.toggle(css['open'])
    }

    // Перевернуть стрелку нажатого пункта
    event.currentTarget.classList.toggle(css['open'])

    if(window.innerWidth >= 767){
        document.querySelector(`.${css['menu__background']}`).classList.add(css['active'])
    }

}

    return(
        <header>
            <div className={css["header__container"]}>
                <div className={css["header__logo"]}>
                    <img src={logo} alt="" />
                </div>
                <div className={css["header__menu"]}>
                    <div className={css["menu__wrapper"]}>
                        <ul className={css["menu__list"]}>
                            <li className={css["menu__item"]}>  
                                <p id="features" onClick={openSublist}>Features</p>
                                <img src={arrowSVG} alt="" />
                                <ul data-id="features" className={css["sublist"]}>
                                    <li style={{listStyleImage: `url(${todoSVG})`}} className={css["sublist__item"]}><a href="">Todo List</a></li>
                                    <li style={{listStyleImage: `url(${calendarSVG})`}} className={css["sublist__item"]}><a href="">Calendar</a></li>
                                    <li style={{listStyleImage: `url(${remindersSVG})`}} className={css["sublist__item"]}><a href="">Reminders</a></li>
                                    <li style={{listStyleImage: `url(${planningSVG})`}} className={css["sublist__item"]}><a href="">Planning</a></li>
                                </ul>
                            </li>
                            <li className={css["menu__item"]}>  
                                <p id="company" onClick={openSublist}>Company</p>
                                <img src={arrowSVG} alt="" />
                                <ul data-id="company" className={css["sublist"]}>
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
                        </ul>
                        <div className={css["menu__footer"]}>
                            <a href="">Login</a>
                            <a href="">Register</a>
                        </div>
                    </div>
                    <div className={css['menu__background']} onClick={toggleMenu}></div>
                    <div className={css["menu__burger"]} onClick={toggleMenu}>
                    { menuIsShown ? <img src={closeMenuSVG} alt="" /> : <img src={menuSVG} alt="" />}
                    </div>
                </div>
            </div>
        </header>
    )
}