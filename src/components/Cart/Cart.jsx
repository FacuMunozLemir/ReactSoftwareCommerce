import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import { cartContext } from "../context/cartContext";
import React, { useContext } from "react";

function Cart() {
  const { emptyCart } = useContext(cartContext);
  const { getItemPrice } = useContext(cartContext);
  const { deleteItems } = useContext(cartContext);
  const context = useContext(cartContext);
  const { cart } = context;

  let carritoVacio = false;

  function vaciarCarrito() {
    emptyCart();
  }


  if(carritoVacio){
    return <div>Tu Carrito está vacío..</div>
  }

  function handleDeleteItem(itemId){
    deleteItems(itemId);
  }
  
  return (
    <div className="cart">
      <h3>Carrito de compras</h3>
      <div className="cartTitulos">
        <p>Prodcutos</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
      <div className="cartProductsContainer">
        {cart.map (item=>(
          <div className="cartItem">
          <h3 className="cartItem--nombre">{item.nombre}</h3>
          <p className="cartItem--precio">Cantidad:{item.count}</p>
          <p className="cartItem--precio">Precio: ${item.precio}</p>
          <button className="btnEliminar"  onClick={()=>handleDeleteItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cartTotales">
        <p>TOTAL</p>
        <p>${getItemPrice()}</p>
      </div>
      <button className="btnConfirmar">Confirmar Compra</button>
    </div>
  );
}

export default Cart;
