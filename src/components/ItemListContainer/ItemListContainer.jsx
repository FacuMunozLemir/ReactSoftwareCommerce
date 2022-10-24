import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import {getItems} from "../../services/firestore";
import { getItemsByCategory } from "../../services/firestore";
import { useParams } from "react-router-dom";


function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoadiong] = useState(true);
  let categoria = useParams().SO;

  useEffect(() => {
    if (categoria === undefined || categoria == "todos") {
      getItems()
      .then((respuestaDatos) => setData(respuestaDatos))
      .finally(()=> setIsLoadiong(false));
    }else {
      getItemsByCategory(categoria)
      .then((respuestaDatos) =>setData(respuestaDatos))
      .finally(() => setIsLoadiong(false))
    }
  }, [categoria]);

  //Utilizar operador lógico &&


  return (
    <div>
      {/* {
        isLoading && <h3>Cargando...</h3>
      } */}
      <div className="container">
        <h1>{props.greeting}</h1>
        <div className="itemsContainer">
          <ItemList itemData={data} />
        </div>
      </div>
    </div>

  );
}

export default ItemListContainer;
