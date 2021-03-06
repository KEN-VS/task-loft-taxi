import React, { useContext } from "react";
import Logolog from "../assets/logolog.svg"
import Button from "../components/Button";
import Context from "../Context";

function Registration() {
  const { navigateTo } = useContext(Context)


  return (
    <div className="login-wrapper container">
      <div className="login-logo">
        <button className="login-logo__icon" onClick={() => { navigateTo("login") }}>
          <img className="login-logo__img" src={Logolog} alt="logo" />
        </button>
      </div>
      <div className="main-content reg-content">
        <div className="reg__form">
          <h1 className="reg__title">Регистрация</h1>
          <form>
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
              <button className="reg__q-enter" onClick={() => { navigateTo("login") }}>Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration