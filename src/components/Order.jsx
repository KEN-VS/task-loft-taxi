import React from "react";
import Standart from "../assets/standart.png"
import Premium from "../assets/premium.png"
import Buisness from "../assets/buisness.png"

function Order() {
  return (
    <div className="order">
      <form className="order__form">
        <fieldset className="order__search">
          <label htmlFor="start">
            <input className="search__start" type="search" id="start" name="start" size="45" required />
          </label>
          <label htmlFor="end">
            <input className="search__end" type="search" id="end" name="end" size="45" required />
          </label>
        </fieldset>
        <fieldset className="order__grade">
          <ul className="order__menu">
            <li className="order__item">
              <button className="grade">
                <div className="grade__name">Стандарт</div>
                <span className="price__title">Стоимость</span>
                <div className="grade__price"></div>
                <img src={Standart} />
              </button>
            </li>
            <li className="order__item">
              <button className="grade">
                <div className="grade__name">Премиум</div>
                <span className="price__title">Стоимость</span>
                <div className="grade__price"></div>
                <img src={Premium} />
              </button>
            </li>
            <li className="order__item">
              <button className="grade">
                <div className="grade__name">Бизнес</div>
                <span className="price__title">Стоимость</span>
                <div className="grade__price"></div>
                <img src={Buisness} />
              </button>
            </li>
          </ul>
          <button className="btn order__btn">Заказать</button>
        </fieldset>
      </form>
    </div>

  )
}

export default Order