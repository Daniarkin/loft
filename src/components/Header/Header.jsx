import React from "react";
import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div>
            <a className="header__link" href="/">Главная</a>
            <a className="header__link" href="/">О нас</a>
            <a className="header__link" href="/">Контакты</a>
          </div>
          <div>
            <a className="header__phone" href="tel:+79648999119">
              <img src="" alt="" />
              8 (964) 89 99 119
            </a>
            <button className="header__delivery">
              <img src="" alt="" />
              Доставк
            </button>
          </div>
        </div>
      </div>


    </header>
  )
}