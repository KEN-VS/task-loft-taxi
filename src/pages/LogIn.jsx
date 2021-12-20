import React from "react";
import Logolog from "../assets/logolog.svg"


function LogIn(props) {
  return (
    <div className="login-wrapper container">
      <div className="login-logo">
        <button className="login-logo__icon" onClick={() => { props.navigate("map") }}>
          <img className="login-logo__img" src={Logolog} alt="logo" />
        </button>
      </div>
      <div className="main-content reg-content">
        <div className="reg__form">
          <h1 className="reg__title">Войти</h1>
          <form>
            <fieldset className="reg__fieldset">
              <label className="email-field" htmlFor="email-field">Email</label>
              <br />
              <input className="email" type="email" name="email" id="email-field" placeholder="mail@mail.ru" required />
              <br />
              <label className="password-field" htmlFor="password-field">Пароль</label>
              <br />
              <input className="password" type="password" name="password" id="password-field" placeholder="*************" required />
            </fieldset>
            <button className="btn reg__btn">Войти</button>
            <div className="reg__q-title">
              <span className="reg__q">Новый пользователь?  </span>
              <button className="reg__q-enter" onClick={() => { props.navigate("registration") }}>Регистрация</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default LogIn