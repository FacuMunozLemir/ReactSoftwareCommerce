import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext);

  return (
    <div>
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <span>{getTotalItemsInCart()}</span>
    </div>
  );
}
export default CartWidget;
