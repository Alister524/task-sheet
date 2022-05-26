import React from "react";
import {Link} from 'react-router-dom';

export const NavTap:React.FunctionComponent = () =>{
    return(
    <nav>
        <div className="nav-wrapper  orange darken-2 paddX1">
            <a href="https://ru.reactjs.org/" target="_blank" className="brand-logo">Тестовый проект на React + TS</a>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Список задач</Link></li>
                <li><Link to="/About">Информация о нас</Link></li>
            </ul>
        </div>
    </nav>
)}

