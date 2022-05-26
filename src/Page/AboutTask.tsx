import React from "react";
import {useNavigate} from 'react-router-dom';

export const AboutTask: React.FC = () => {

    const navigate = useNavigate()

    const home = () =>{
        navigate('/')
    }

    return(
        <div>
            <h1> Информация о нас !</h1>
            <p>Данный проект сформирован с использованием библиотеки React и TypeScript.<br /> Проект необходим для 
                записи каких-либо задач, с целью оптимизации времени на рабочем месте.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat officiis aut sequi alias architecto 
                assumenda officia quasi minus asperiores, dolorum iste nam fuga quos veniam aspernatur, 
                dicta obcaecati recusandae culpa consectetur nisi ipsa incidunt ea temporibus? Harum ducimus necessitatibus 
                eum animi blanditiis eos hic, minima, facilis, ab assumenda eveniet?</p>
            <button className="btn" onClick={home}>Обратно к списку задач</button>
        </div>
    )
}