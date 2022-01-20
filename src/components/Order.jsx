import React from "react";
import Standart from "../assets/standart.png"
import Premium from "../assets/premium.png"
import Buisness from "../assets/buisness.png"
import OrderItem from "./OrderItem";
import Button from "./Button";
// import AlertOrder from "./Alertorder";


function Order() {


  // return

  // <AlertOrder />

  const CARD = [
    { name: "Стандарт", title: "Стоимость", price: "0", image: Standart, text: "Standart", id: 1 },
    { name: "Премиум", title: "Стоимость", price: "1", image: Premium, text: "Premium", id: 2 },
    { name: "Бизнес", title: "Стоимость", price: "2", image: Buisness, text: "Buisness", id: 3 },
  ]
  return (
    <div className="order">
      <form className="order__form" onSubmit=''>
        <fieldset className="order__search">
          <label htmlFor="start">
            <input className="search__start"
              type="search"
              id="start"
              name="start" size="45" list="search__start" />
            <datalist id='search__start'>
              <option></option>
            </datalist>
          </label>
          <label htmlFor="end">
            <input className="search__end" type="search" id="end" name="end" size="45" list="search__end" />
            <datalist id='search__end'>
              <option></option>
            </datalist>
          </label>
        </fieldset>
        <fieldset className="order__grade">
          <ul className="order__menu">
            {CARD.map(card => (
              <OrderItem card={card} key={card.id} />
            ))}
          </ul>
          <Button className="order__btn" text={"Заказать"} />
        </fieldset>
      </form>
    </div>

  )
}


export default Order