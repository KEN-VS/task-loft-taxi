import React from "react";
import Logohead from "../assets/logohead.svg"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logOut } from "./redux/actions"



function Header(props) {

  const NAVS = [
    { name: 'map', text: 'Карта', path: '/map', id: 1 },
    { name: 'profile', text: 'Профиль', path: '/profile', id: 2 },
    { name: 'login', text: 'Выйти', path: '/', id: 3 }
  ]

  return (
    <div className="container header__container">
      <div className="header__logo">
        <Link to='/'>
          <img className="header-logo__img" src={Logohead} alt="logo" />
        </Link>
      </div>
      <nav className="header__menu">
        <ul className="menu__list">
          {NAVS.map(item => (
            <li className="menu__item" key={item.id}>
              if (item.path==='/'){
                props.logOut()
              }else{
                <Link to={item.path}>{item.name}</Link>
              }
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

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn }
}
const mapDispatchToProps = { logOut }

export default connect(mapStateToProps, mapDispatchToProps)(Header)