import { useState } from "react";
import "./itemcount.css";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, initial, onAddToCart }) {
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
      <Link to="/carrito">
        <button className="btnAgregar" onClick={() => onAddToCart(count)}>
          Agregar al Carrito
        </button>
      </Link>
    </div>
  );
}
