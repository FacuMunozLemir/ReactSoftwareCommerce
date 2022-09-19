import getItems from "../../services/mockAPI";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function ItemList(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
      console.log("ejecutamos getItems");
    });
  }, []);

  return data.map((item) => {
    console.log("item");
    return (
      <Item
        key={item.id}
        nombre={item.nombre}
        imagen={item.img}
        descripcion={item.descripcion}
        precio={item.precio}
        stock={item.stock}
      />
    );
  });
}
