import React from "react";
import { Link, Navigate } from "react-router-dom";
import Logolog from "../assets/logolog.svg"
import Button from "../components/Button";
import { connect } from "react-redux"
import { authenticate } from "../components/redux/actions"



function LogIn(props) {


  if (props.isLoggedIn) {
    <Navigate to='/map' />
  }

  return (
    <div className="login-wrapper container">
      <div className="login-logo">
        <Link className="login-logo__icon" to="/">
          <img className="login-logo__img" src={Logolog} alt="logo" />
        </Link>
      </div>
      <div className="main-content reg-content">
        <div className="reg__form">
          <h1 className="reg__title">Войти</h1>
          <form on onSubmit={(e) => {
            e.preventDefault()
            props.authenticate(e.target.email.value, e.target.password.value)
          }
          }
          >
            <fieldset className="reg__fieldset">
              <label className="email-field" htmlFor="email-field">Email</label>
              <br />
              <input className="email" type="email" name="email" id="email-field" placeholder="mail@mail.ru" required />
              <br />
              <label className="password-field" htmlFor="password-field">Пароль</label>
              <br />
              <input className="password" type="password" name="password" id="password-field" placeholder="*************" required />
            </fieldset>
            <Button className="reg__btn" text={"Войти"} />
            <div className="reg__q-title">
              <span className="reg__q">Новый пользователь?  </span>
              <Link className="reg__q-enter" to="registration">Регистрация</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn }
}
const mapDispatchToProps = { authenticate }

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)