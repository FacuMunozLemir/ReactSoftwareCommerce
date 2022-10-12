import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

function ItemDetail(props) {
  /*Hacemos un estado para guardar el item count*/
  let estado = false;
  function handleAddToCart(count) {
    alert(`Se ha agregado ${count} unidades del producto seleccionado`);
    estado = count;
    alert(estado);
  }

  return (
    <div className="contenedorDescripcionProducto">
      <div className="izquierda">
        <img src={props.img} alt="imágen de producto" />
      </div>
      <div className="derecha">
        <div className="titulo">
          <h2>{props.nombre}</h2>
        </div>
        <div className="descripcion">
          <p>{props.descripcion}</p>
        </div>
        <div className="precio">
          <p>Valor por unidad: ${props.precio}</p>
        </div>
        {estado === false ? (
          <ItemCount
            stock={props.stock}
            initial={1}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <button>Finaizar Compra</button>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
