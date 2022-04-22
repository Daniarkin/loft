import React from "react";
import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

        </div>

      </div>
      <div>
        <a href="/">Главная</a>
        <a href="/">О нас</a>
        <a href="/">Контакты</a>
      </div>
      <div>
        <a href="tel:+79648999119">
          <img src="" alt="" />
          8(964)89 99 119
        </a>
        <button>
          <img src="" alt="" />
          Доставка
        </button>
      </div>
    </header>
  )
}