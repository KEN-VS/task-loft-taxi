import React from "react";
import "./styles/Payment.css"
import Button from "./Button"
import { Link } from "react-router-dom"


function AlertPayment() {
  return (
    <div className="payment">
      <h1 className="payment__title">Профиль</h1>
      <div className="payment__text">
        <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
      </div>
      <Link to='/map'><Button text={"Перейти на карту"} /></Link>
    </div>
  )
}



export default AlertPayment