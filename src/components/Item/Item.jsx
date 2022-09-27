import "./item.css";
import ItemCount from "../ItemCount/ItemCount";

export default function Card(item) {
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
    <div className="card">
      <h4>{item.nombre}</h4>
      <img src={item.imagen} alt="" />
      <p>{item.descripcion}</p>
      <p className="precio">Valor: ${item.precio}</p>
      <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  );
}
