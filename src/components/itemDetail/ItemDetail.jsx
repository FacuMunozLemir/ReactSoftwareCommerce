import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
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
        <ItemCount stock={props.stock} initial={1} />
      </div>
    </div>
  );
}

export default ItemDetail;
