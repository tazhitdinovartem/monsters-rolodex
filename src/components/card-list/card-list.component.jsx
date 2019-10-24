/* импортируем Реакт, везде, где испльзуется синтаксис jsx*/
import React from 'react';
import './card-list.styles.css'
import { Card } from '../card/card.component'
export const CardList = (props) => {
    /* 
    здесь props отсылается к компоненту CardList из файла App.js, 
    у которого в кастомном аттрибуте "monsters" ссылка на массив с монстрами
    */
    return(
        <div className="card-list">
            { /* 
            ниже идет обращение к аттрибуту "monsters" компонента "CardList", 
            */  
            props.monsters.map(monster => (
              <Card key={monster.id} monster={monster} />
              /* Передали в карточку монстра аттрибутом "monster" САМ ОБЪЕКТ монстра */
            ))}
        </div>
    )
}