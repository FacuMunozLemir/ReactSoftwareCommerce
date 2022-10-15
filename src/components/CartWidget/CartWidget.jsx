import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

function CartWidget() {
  const { getItemsQty } = useContext(cartContext);

  return (
    <div>
      <span>{getItemsQty()}</span>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    </div>
  );
}
export default CartWidget;
