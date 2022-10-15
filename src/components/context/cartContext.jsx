import React, { createContext } from "react";
import { useState } from "react";

const cartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  let newCart;

  function isInCart(itemId) {
    //El método some devuelve true o false si existe el item en el array (cart)
    return cart.some((el) => el.id === itemId);
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
    return setCart(cart.filter((el) => el.id !== itemId));
  }

  function getItemsQty() {
    let total = 0;
    cart.forEach((cart) => (total = total + cart.count));
    return total;
    //Reduce es un método que como el resto recibe una funcion recibe una variabe de acumuación y una variabale de integración. El 0 es el valor incial de la variable de acumulación
    // return cart.reduce((acc, x) => ((acc += x.count), 0));
  }

  function getItemPrice() {
    let precioTotal = 0;
    cart.forEach((el) => (precioTotal = el.precio * el.count + precioTotal));
    return precioTotal;
  }

  //Pasamos el objeto value a los componentes hijos
  return (
    <cartContext.Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItems,
        getItemsQty,
        getItemPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { cartContext };
