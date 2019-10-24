import React from 'react';
import './search-box.styles.css';

/*
    Компоненты-функции, в отличии от компонентов-классов,
    не имеют доступа к state, потому что у них нет метода-конструктора constructor().
    и у них нет доступа к life-cycle методам
*/

export const SearchBox = ( { placeholder, handleChange } ) => {
    return(
    <input 
        onChange={handleChange} 
        /* здесь получаем значение поля поиска и задаем новое состояние для поля searchField */
        className="search" 
        type="search" 
        placeholder={placeholder} />
    )
}