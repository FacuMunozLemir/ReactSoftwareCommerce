import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

export default function Checkout(){
    const context = useContext(cartContext);
    const { cart } = context;
    const { emptyCart } = useContext(cartContext);

    let carritoVacio = [];
    carritoVacio = cart;


    return(
        <div className="checkoutContainer" >
            <h2>Gracias por tu compra</h2>
            <p>Detalle del producto</p>
            <div className="checkoutContainer--detalle">
                {cart.map (item=>(
                <div className="cartItem">
                <img src={item.img} alt="imagen de producto" className="cartItem--img"/>
                <h3 className="cartItem--nombre">{item.nombre}</h3>
                <p className="cartItem--precio">Cantidad:{item.count}</p>
                <p className="cartItem--precio">Precio: ${item.precio}</p>
                </div>
                ))}
            </div>
        </div>
    )
    
}