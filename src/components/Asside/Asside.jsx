import React from "react";
import IconSVG from "../../assets/img/sprite.svg";
import './asside.scss'
n

export const AssideBar = () => {
  return (
    <div className="asside">
      <div className="container">
        <div className="asside__wrapper">

          <div className="asside__menu">
            Меню
            <a className="asside__link" href="/">Главная</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <use xlinkHref={`${IconSVG}#home`}></use>
            </svg>
            <a className="asside__link" href="/">О нас</a>
            <a className="asside__link" href="/">Контакты</a>
          </div>

          <div className="asside__category">
            Категории
            <a className="asside__link" href="/">Кухни</a>
            <a className="asside__link" href="/">Спальни</a>
            <a className="asside__link" href="/">Гостинные</a>
            <a className="asside__link" href="/">Прихожие</a>
            <a className="asside__link" href="/">Офисная мебель</a>
            <a className="asside__link" href="/">Детская</a>
            <a className="asside__link" href="/">Акции</a>
            <a className="asside__link" href="/">Новинки</a>
            <a className="asside__link" href="/">Матрасы</a>
            <a className="asside__link" href="/">Мягкая мебель</a>
            <a className="asside__link" href="/">Шкафы</a>
          </div>

        </div>

      </div>

    </div >
  )
}