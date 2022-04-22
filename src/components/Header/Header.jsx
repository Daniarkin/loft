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
            <a href="tel:+79648999119">
              <img src="" alt="" />
              8(964)89 99 119
            </a>
            <button>
              <img src="" alt="" />
              Доставку
            </button>
          </div>
        </div>
      </div>


    </header>
  )
}