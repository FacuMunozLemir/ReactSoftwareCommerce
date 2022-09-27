import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";

//1. Obtener los datos de nuestra mock api
// estado
// cliclos de vida
// props
// promesas
// ...map

function ItemListContainer(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
      console.log("ejecutamos getItems");
    });
  }, [data]);

  return (
    <div className="container">
      <h1>{props.greeting}</h1>
      <div className="itemsContainer">
        <ItemList itemData={data} />
      </div>
    </div>
  );
}

export default ItemListContainer;
