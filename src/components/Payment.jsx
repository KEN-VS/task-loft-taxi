import React from "react";
import Input from "./Input";
import Button from "./Button";
import Cartlogo from "../assets/cartlogo.svg"
import Cartchip from "../assets/cartchip.svg"
import Carttype from "../assets/carttype.svg"
import "./styles/Payment.css"
import { connect } from "react-redux"
import { setCartSuccess } from "./redux/actions/sendcarddata"

function Payment(props) {
  return (
    <div className="payment">
      <h1 className="payment__title">Профиль</h1>
      <form className="payment__form" onSubmit={(e) => {
        e.preventDefault()
        props.setCartSuccess(e.target.cardName.value, e.target.cardNumber.value, e.target.expiryDate.value, e.target.cvc.value)
      }}>
        <div className="field__title"> Введите платежные данные</div>
        <div className="form__elem">
          <div className="form__col">
            <div className="form__row">
              <Input inputName={"cardName"} inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Имя владельца"} />
            </div>
            <div className="form__row">
              <Input inputName={"cardNumber"} inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Номер карты"} inputPattern={'[0-9]{4}\f[0-9]{4}\f[0-9]{4}\f[0-9]{4}'} />
            </div>
            <div className="form__row">
              <div className="form__block">
                <Input inputName={"expiryDate"} inputType={"text"} inputSize={"20"} inputId={" "} labelName={"MM/YY"} />
                <Input inputName={"cvc"} inputType={"text"} inputSize={"20"} inputId={" "} labelName={"CVC"} />
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

const mapStateToProps = (state) => {
  return { isPaymentData: state.setCard.isPaymentData }
}
const mapDispatchToProps = { setCartSuccess }

export default connect(mapStateToProps, mapDispatchToProps)(Payment)