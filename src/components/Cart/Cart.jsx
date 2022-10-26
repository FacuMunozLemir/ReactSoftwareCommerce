import "./cart.css";
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Cart() {
  const { emptyCart } = useContext(cartContext);
  const { getItemPrice } = useContext(cartContext);
  const { deleteItems } = useContext(cartContext);
  const context = useContext(cartContext);
  const { cart } = context;



  let carritoVacio = [];
  carritoVacio = cart;

  function vaciarCarrito() {
    emptyCart();
  }


  if(carritoVacio.length === 0){
    console.log(carritoVacio);
    return(
      <div className="carritoVacioContainer">
        <div className="texto">Tu Carrito está vacío..</div>
        <Link to="/" className="btnVolver">Seguir comprando</Link>
      </div>
    );
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
          <div key={item.id} className="cartProductsContainer2">
            <div className="cartItem">
            <img src={item.img} alt="imagen de producto" className="cartItem--img"/>
            <h3 className="cartItem--nombre">{item.nombre}</h3>
            <p className="cartItem--precio">Cantidad:{item.count}</p>
            <p className="cartItem--precio">Precio: ${item.precio}</p>
            <button className="btnEliminar"  onClick={()=>handleDeleteItem(item.id)}>Eliminar</button>
            </div>
          </div>

        ))}
      </div>
      <div className="cartTotales">
        <p>TOTAL</p>
        <p>${getItemPrice()}</p>
      </div>
      <CheckoutForm/>
      
    </div>
  );
}

export default Cart;



// Tus datos son privados de forma predeterminada. El acceso de lectura/escritura de los clientes solo se otorgará como se indica en tus reglas de seguridad.
// Comenzar en modo de prueba
// Para permitir una configuración rápida, los datos se abren de forma predeterminada. Sin embargo, debes actualizar las reglas de seguridad en un plazo de 30 días a fin de habilitar el acceso de lectura/escritura a largo plazo para los clientes.
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 11, 22);
//     }
//   }
// }
