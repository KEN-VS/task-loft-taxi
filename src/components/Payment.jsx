import React from "react";

function Payment() {
  return (
    <div className="payment">
      <h1 className="payment__title">Профиль</h1>
      <form className="payment__form">
        <div className="field__title"> Введите платежные данные</div>
        <div className="form__elem">
          <div className="form__col">
            <div className="form__row">
              <label htmlFor="payment-name" className="payment-name">Имя владельца
              </label>
              <input className="pay-name" type="text" id="payment-name" value="Loft" size="50" />
            </div>
            <div className="form__row">
              <label htmlFor="payment-number" className="payment-number">Номер карты
              </label>
              <input className="cart-number" type="text" id="payment-number" size="50" placeholder="5545  2300  3432  4521" />
            </div>
            <div className="form__row">
              <div className="form__block">
                <label htmlFor="payment-date" className="payment-date">MM/YY
                  <input className="date" type="text" id="payment-date" placeholder="MM/YY" size="20" />
                </label>

                <label htmlFor="payment-cvc" className="payment-cvc">CVC
                  <input className="cvc" type="text" id="payment-cvc" placeholder="CVC" size="20" />
                </label>
              </div>
            </div>
          </div>
          <div className="form__col">
            <div className="cart">
            </div>
          </div>
        </div>
        <div className="payment__btn">
          <button className="btn ">Сохранить</button>
        </div>
      </form>
    </div>

  )
}

export default Payment