import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  function onAdd(count) {
    alert(
      "Se ha agregado " +
        count +
        " unidades del producto seleccionado al carrito"
    );
    console.log(
      "Se ha agregado " +
        count +
        " unidades del producto seleccionado al carrito"
    );
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
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
