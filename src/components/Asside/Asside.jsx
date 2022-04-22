import React from "react";
import './asside.scss'

export const Asside = () => {
  return (
    <asside className="asside">
      <div className="container">
        <div className="asside__wrapper">
          <div className="asside__menu">
            Меню

            <a href="/">Главная</a>
            <a href="/">О нас</a>
            <a href="/">Контакты</a>
          </div>
          
            <div className="asside__category">
            
            Категории

            <a href="/">Кухни</a>
            <a href="/">Спальни</a>
            <a href="/">Гостинные</a>
            <a href="/">Прихожие</a>
            <a href="/">Офисная мебель</a>
            <a href="/">Детская</a>
            <a href="/">Акции</a>
            <a href="/">Новинки</a>
            <a href="/">Матрасы</a>
            <a href="/">Мягкая мебель</a>
            <a href="/">Шкафы</a>
          </div>

        </div>

      </div>



    </asside>
  )
}