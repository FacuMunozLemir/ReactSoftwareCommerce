import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import "./checkout.css"

export default function Checkout(){
    const context = useContext(cartContext);
    const { cart } = context;
    const { emptyCart } = useContext(cartContext);

    const orderId = useParams().orderid;
    
    return(
        <div className="checkoutContainer" >
            <h2>Gracias por tu compra</h2>
            <h4>Detalle de tu orden: {orderId}</h4>
            <div className="checkoutContainer--detalle">
                {cart.map (item=>(
                <div key={item.id} className="cartProductsContainer2">
                    <div className="cartItem">
                        <img src={item.img} alt="imagen de producto" className="cartItem--img"/>
                        <h3 className="cartItem--nombre">{item.nombre}</h3>
                        <p className="cartItem--precio">Cantidad:{item.count}</p>
                        <p className="cartItem--precio">Precio: ${item.precio}</p>
                    </div>
                </div>
                ))
               }
            </div>
            
            <Link to="/" className="btnVolver" onClick={emptyCart}>Volver al inicio</Link>
        </div>
    )
}