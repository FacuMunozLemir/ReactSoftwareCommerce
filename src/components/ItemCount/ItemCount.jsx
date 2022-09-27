import { useState } from "react";
import "./itemcount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleClickSuma() {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("el stock máximo disponible es de " + stock + " unidades");
    }
  }

  function handleClickResta() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  function agregarCarrito() {
    onAdd(count);
  }

  return (
    <div className="containerCount">
      <div className="fila">
        <button className="btnOperacion" onClick={handleClickResta}>
          -
        </button>
        <h3>{count}</h3>
        <button className="btnOperacion" onClick={handleClickSuma}>
          +
        </button>
      </div>

      <button className="btnAgregar" onClick={agregarCarrito}>
        Agregar al Carrito
      </button>
    </div>
  );
}
