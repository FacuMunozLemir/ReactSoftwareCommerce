import React from "react";
import { useState, useEffect } from "react";
import { getSingleElement } from "../../services/mockAPI";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import "./itemdetailcontainer.css";

function ItemDetailContainer() {
  const id = useParams().id;

  let [item, setItem] = useState([]);
  useEffect(() => {
    getSingleElement(id).then((respuestaDatos) => {
      setItem(respuestaDatos);
    });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail
        id = {item.id}
        nombre={item.nombre}
        stock={item.stock}
        categoria={item.categoria}
        descripcion={item.descripcion}
        img={item.img}
        precio={item.precio}
      />
    </div>
  );
}

export default ItemDetailContainer;
