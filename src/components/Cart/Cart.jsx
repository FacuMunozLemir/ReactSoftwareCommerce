import "./cart.css";
import { cartContext } from "../context/cartContext";
import React, { useContext } from "react";

function Cart() {
  const { getItem } = useContext(cartContext);
  const { emptyCart } = useContext(cartContext);
  const { getItemPrice } = useContext(cartContext);

  function vaciarCarrito() {
    emptyCart();
  }
  return (
    <div className="cart">
      <h3>Carrito de compras</h3>
      <div className="cartTitulos">
        <p>Prodcutos</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
      <div className="cartProductsContainer"></div>
      <div className="cartTotales">
        <p>TOTAL</p>
        <p>{getItemPrice()}</p>
      </div>
    </div>
  );
}

export default Cart;
