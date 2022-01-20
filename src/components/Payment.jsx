import React from "react";
import Input from "./Input";
import Button from "./Button";
import Cartlogo from "../assets/cartlogo.svg"
import Cartchip from "../assets/cartchip.svg"
import Carttype from "../assets/carttype.svg"
import "./styles/Payment.css"

function Payment() {
  return (
    <div className="payment">
      <h1 className="payment__title">Профиль</h1>
      <form className="payment__form">
        <div className="field__title"> Введите платежные данные</div>
        <div className="form__elem">
          <div className="form__col">
            <div className="form__row">
              <Input inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Имя владельца"} />
            </div>
            <div className="form__row">
              <Input inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Номер карты"} inputPattern={'[0-9]{4}\f[0-9]{4}\f[0-9]{4}\f[0-9]{4}'} />
            </div>
            <div className="form__row">
              <div className="form__block">
                <Input inputType={"text"} inputSize={"20"} inputId={" "} labelName={"MM/YY"} />
                <Input inputType={"text"} inputSize={"20"} inputId={" "} labelName={"CVC"} />
              </div>
            </div>
          </div>
          <div className="form__col">
            <div className="cart">
              <div className="cart_date">
                <img className="cart_date-img" src={Cartlogo} alt="logo" />
                <div className="cart_date-text">45/12</div>
              </div>
              <div className="cart_number">55555555</div>
              <div className="cart_pics">
                <img className="" src={Cartchip} alt="chip" />
                <img className="" src={Carttype} alt="cart type" />
              </div>
            </div>
          </div>
        </div>
        <div className="payment__btn">
          <Button text={"Сохранить"} />
        </div>
      </form>
    </div>

  )
}

export default Payment