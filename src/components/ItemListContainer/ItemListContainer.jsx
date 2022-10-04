import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import getItems from "../../services/mockAPI";
import { getItemsByCategory } from "../../services/mockAPI";
import { useParams } from "react-router-dom";

//1. Obtener los datos de nuestra mock api
// estado
// cliclos de vida
// props
// promesas
// ...map

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  let categoria = useParams().SO;

  useEffect(() => {
    if (categoria === undefined || categoria == "todos") {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(categoria).then((respuestaDatos) =>
        setData(respuestaDatos)
      );
    }
  }, [categoria]);

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
