import React from "react";
import { Link } from "react-router-dom";
import Logolog from "../assets/logolog.svg"
import Button from "../components/Button";
import { connect } from "react-redux"
import { registration } from "../components/redux/actions"



function Registration(props) {



  return (
    <div className="login-wrapper container">
      <div className="login-logo">
        <Link className="login-logo__icon" to="/" >
          <img className="login-logo__img" src={Logolog} alt="logo" />
        </Link>
      </div>
      <div className="main-content reg-content">
        <div className="reg__form">
          <h1 className="reg__title">Регистрация</h1>
          <form onSubmit={(e) => {
            e.preventDefault()
            props.registration(e.target.email.value, e.target.name.value, e.target.password.value)
          }}>
            <fieldset className="reg__fieldset">
              <label className="email-field" htmlFor="email-field">Email*</label>
              <br />
              <input className="email" type="email" name="email" id="email-field" placeholder="mail@mail.ru" required />
              <br />
              <label className="name-field" htmlFor="name">Как вас зовут?*</label>
              <br />
              <input className="name" type="text" name="name" id="name-field" placeholder="Петр Александрович" required />
              <br />
              <label className="password-field" htmlFor="password-field">Придумайте пароль*</label>
              <br />
              <input className="password" type="password" name="password" id="password-field" placeholder="*************" required />
            </fieldset>
            <Button className="reg__btn" text={"Зарегистрироваться"} />
            <div className="reg__q-title">
              <span className="reg__q">Уже зарегестрированны? </span>
              <Link className="reg__q-enter" to='/'>Войти</Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.reg.isLoggedIn }
}
const mapDispatchToProps = { registration }

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

