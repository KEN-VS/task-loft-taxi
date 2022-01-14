// import React, { useContext } from "react";
import Logohead from "../assets/logohead.svg"
// import Context from "../Context";
import { Link } from "react-router-dom"



function Header() {


  // const { navigateTo, logOut } = useContext(Context)


  const NAVS = [
    { name: 'map', text: 'Карта', path: '/map', id: 1 },
    { name: 'profile', text: 'Профиль', path: '/profile', id: 2 },
    { name: 'login', text: 'Выйти', path: '/', id: 3 }
  ]

  return (
    <div className="container header__container">
      <div className="header__logo">
        <button className="header-logo__icon"
        // onClick={() => navigateTo("map")}
        ><Link to='/'></Link>
          <img className="header-logo__img" src={Logohead} alt="logo" />
        </button>
      </div>
      <nav className="header__menu">
        <ul className="menu__list">
          {NAVS.map(item => (
            <li className="menu__item" key={item.id}>
              <Link to={item.path}>{item.name}</Link>
              {/* <span className="menu__link" onClick={() => {
                if (item.name === 'login') {
                  logOut()
                  navigateTo(item.name)
                } else { navigateTo(item.name) }
              }}>{item.text}</span> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>)
}



export default Header