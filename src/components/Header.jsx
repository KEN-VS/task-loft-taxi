import React from "react";
import Logohead from "../assets/logohead.svg"


function Header(props) {
  return (
    <div className="container header__container">
      <div className="header__logo">
        <button className="header-logo__icon" onClick={() => { props.navigate("map") }}>
          <img className="header-logo__img" src={Logohead} alt="logo" />
        </button>
      </div>
      <nav className="header__menu">
        <ul className="menu__list">
          <li className="menu__item">
            <button className="menu__link" onClick={() => { props.navigate("map") }}>
              Карта
            </button>
          </li>
          <li className="menu__item">
            <button className="menu__link" onClick={() => { props.navigate("profile") }}>
              Профиль</button>
          </li>
          <li className="menu__item">
            <button className="menu__link" onClick={() => { props.navigate("login") }}>
              Войти</button>
          </li>
        </ul>
      </nav>
    </div>)
}

export default Header