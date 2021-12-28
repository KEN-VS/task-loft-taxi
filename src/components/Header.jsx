import React, { useContext } from "react";
import Logohead from "../assets/logohead.svg"
import Context from "../Context";



function Header() {


  const { navigateTo, logOut } = useContext(Context)


  const NAVS = [
    { name: 'map', text: 'Карта', id: 1 },
    { name: 'profile', text: 'Профиль', id: 2 },
    { name: 'login', text: 'Выйти', id: 3 }
  ]

  return (
    <div className="container header__container">
      <div className="header__logo">
        <button className="header-logo__icon"
          onClick={() => navigateTo("map")}
        >
          <img className="header-logo__img" src={Logohead} alt="logo" />
        </button>
      </div>
      <nav className="header__menu">
        <ul className="menu__list">
          {NAVS.map(item => (
            <li className="menu__item" key={item.id}>
              <span className="menu__link" onClick={() => {
                if (item.name === 'login') {
                  logOut()
                  navigateTo(item.name)
                } else { navigateTo(item.name) }
              }}>{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>)
}



export default Header