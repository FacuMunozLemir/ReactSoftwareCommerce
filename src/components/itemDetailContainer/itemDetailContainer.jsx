import React from "react";
import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";
import ItemDetail from "../itemDetail/ItemDetail";

function ItemDetailContainer() {
  let [item, setItem] = useState([]);
  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setItem(respuestaDatos[0]);
      console.log(item);
    });
  }, [item]);

  return (
    <ItemDetail
      nombre={item.nombre}
      stock={item.stock}
      categoria={item.categoria}
      descripcion={item.descripcion}
      img={item.img}
      precio={item.precio}
    />
  );
}

export default ItemDetailContainer;
