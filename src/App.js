/* 
Импортируем компонент из реакта, чтобы юзать классы 
*/
import React, { Component } from 'react';

import { CardList}  from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

export default class App extends Component {
  /*
  Используя класс у нас есть доступ к state - объекту js со свойствами (properties), к которым у нас есть доступ
  из любой точки внутри этого класса/
  Для этого мы вызываем конструктор constructor()
  */
  constructor() {
    /* 
    Вызываем метод super() - он вызывает метод-конструктор на Component-class.
    и это даёт нам доступ к this.state
    */
  super();
  /*
  свойство this.state существует сейчас в этом классе App.
  и мы можем установить ему какое-нибудь значение.
  Мы можем установить некое свойство для нашего state-объекта
  */
  this.state = {
    monsters: [], /* массив с "монстрами", куда мы засунули пользователей из json */
    searchField: '' /* добавляем поле поиска в объект state, потому что оно оказывает влияние на СОСТОЯНИЕ приложения */
  };
  }

  /* это life-cycle метод, который вызывается, когда страница загружена*/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) /* конвертируем данные в формат json */
    .then(users_from_json => this.setState( { monsters: users_from_json } )) 
    /* 
    взяли состояние объекта (this.state) и изменили его (set.state), 
    засунов юзеров из json в массив с монстрами
    */
  }

  /* 
  в классе обязательно должна быть функция render(). всё содержимое класса находится там 
  */
  render() {

    const { monsters, searchField } = this.state;

    /*
    const { monsters, searchField } = this.state; - это эквивалетно этому:
    
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */

    /* создаем массив с отфильтрованными монстрами, потому что нельзя изменять исходный массив! */
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
       
        {/* здесь получаем значение поля поиска и 
        задаем новое состояние для поля searchField */}
        
        <SearchBox 
          placeholder="Search monsters"
          handleChange={e => this.setState({searchField: e.target.value})} 
          />
        {/*
          передаем в компонент CardList массив с отфильтрованными монстрами, потому что изначально нет выборки по фильтру,
          поэтому подходят все элементы неотсортированного массива
        */}

        <CardList monsters={filteredMonsters} />
      
      </div>
    );
  }
  
}

