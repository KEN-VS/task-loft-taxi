import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import "./styles/AlertOrder.css"


function AlertOrder() {

  return (
    <div className="alert__form">

      <h3 className="alert__title">Платежные данные не заполнены</h3>


      <Link to='/profile'><Button text={"В профиль"} /></Link>


    </div>
  )

}


export default AlertOrder
