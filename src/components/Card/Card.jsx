import "./card.css";
import ItemCount from "../ItemCount/ItemCount";

export default function Card(item) {
  function onAdd({ count }) {
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
      <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  );
}
