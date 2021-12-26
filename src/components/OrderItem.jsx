import React from "react";
import PropTypes from "prop-types"

function OrderItem({ card }) {
  return (

    <li className="order__item">
      <button className="grade">
        <div className="grade__name">{card.name}</div>
        <span className="price__title">{card.title}</span>
        <div className="grade__price">{card.price}</div>
        <img src={card.image} alt={card.text} />
      </button>
    </li>
  )

}

OrderItem.propTypes = {
  card: PropTypes.object.isRequired
}

export default OrderItem