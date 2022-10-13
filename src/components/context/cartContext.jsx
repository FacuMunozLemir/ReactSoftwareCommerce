import React, { createContext } from "react";
import { useState } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  let newCart;

  function isInCart(itemId) {
    let found = null;
    found = cart.some((el) => el.id == itemId);
    console.log(found);
    return found;
  }

  function addItem(item, count) {

    if (isInCart(item.id)) {

      newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {

          itemMapeo.count += count;
          return itemMapeo;
        } else {
          return itemMapeo;
        }
      });

    } else {

      newCart = cart.map((item) => item); //Copiamos el carrito
      newCart.push({ ...item, count: count }); //Le agregamos el count
      setCart(newCart); //Seteamos el cambio

    }

    setCart(newCart);

  }

  function emptyCart(itemId) {
    setCart([]);
  }

  function deleteItems(itemId) {

  }

  function getItemsQty() {
    let total = 0;
    cart.forEach((cart) => (total = total + cart.count));
    return total;
  }

  function getItemPrice(){

  }
 

 

  

  //Pasamos el objeto value a los componentes hijos
  return (
    <cartContext.Provider
      value={{ cart, isInCart, addItem, emptyCart, deleteItems, getItemsQty, getItemPrice}}
    >
      {children}
    </cartContext.Provider>
  );
}


export { cartContext };
