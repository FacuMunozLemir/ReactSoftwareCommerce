import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";

//1. Obtener los datos de nuestra mock api
// estado
// cliclos de vida
// props
// promesas
// ...map

function ItemListContainer(props) {
  return (
    <div className="container">
      <h1>{props.greeting}</h1>
      <div className="itemsContainer">
        <ItemList />
      </div>
    </div>
  );
}

export default ItemListContainer;
