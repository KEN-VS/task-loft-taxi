import React, { useState } from "react";
import { connect } from "react-redux";
import { sendCardData } from "./redux/actions/sendcarddata";
import Input from "./Input";
import Button from "./Button";
import AlertPayment from "./AlertPayment"
import Cartlogo from "../assets/cartlogo.svg"
import Cartchip from "../assets/cartchip.svg"
import Carttype from "../assets/carttype.svg"
import "./styles/Payment.css"


function Payment(props) {

  const [state, setState] = useState(props)




  const inputHandle = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  if (props.isPaymentSuccess) {
    return <AlertPayment />
  }

  return (
    <div className="payment">
      <h1 className="payment__title">Профиль</h1>
      <form className="payment__form"
        onSubmit={(e) => {
          e.preventDefault()
          props.sendCardData(e.target.cardName.value, e.target.cardNumber.value, e.target.expiryDate.value, e.target.cvc.value)
        }}
      >
        <div className="field__title"> Введите платежные данные</div>
        <div className="form__elem">
          <div className="form__col">
            <div className="form__row">
              <Input inputName={"cardName"} inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Имя владельца"} inputValue={state.cardName} inputHandle={inputHandle} />
            </div>
            <div className="form__row">
              <Input inputName={"cardNumber"}
                inputValue={state.cardNumber}
                inputHandle={inputHandle}
                inputType={"text"}
                inputSize={"50"}
                inputId={" "}
                labelName={"Номер карты"}
              // inputPattern={'[\d| ]{16,22}'} 
              />
            </div>
            <div className="form__row">
              <div className="form__block">
                <Input inputName={"expiryDate"} inputType={"text"} inputSize={"20"} inputId={" "} labelName={"MM/YY"} inputValue={state.expiryDate} inputHandle={inputHandle} />
                <Input inputName={"cvc"} inputType={"text"} inputSize={"20"} inputId={" "} labelName={"CVC"} inputValue={state.cvc} inputHandle={inputHandle} />
              </div>
            </div>
          </div>
          <div className="form__col">
            <div className="cart">
              <div className="cart_date">
                <img className="cart_date-img" src={Cartlogo} alt="logo" />
                <div className="cart_date-text">{state.expiryDate}</div>
              </div>
              <div className="cart_number">{state.cardNumber}</div>
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
  return {
    isPaymentSuccess: state.setCard.isPaymentSuccess,
    cardName: state.setCard.cardName,
    cardNumber: state.setCard.cardNumber,
    expiryDate: state.setCard.expiryDate,
    cvc: state.setCard.cvc
  }
}
const mapDispatchToProps = { sendCardData }

export default connect(mapStateToProps, mapDispatchToProps)(Payment)