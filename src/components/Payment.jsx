import React from "react";
import Input from "./Input";
import Button from "./Button";

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
              <Input inputType={"text"} inputSize={"50"} inputId={" "} labelName={"Номер карты"} />
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