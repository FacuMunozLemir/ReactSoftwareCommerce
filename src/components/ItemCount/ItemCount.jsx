import { useState, useEffect } from "react";
import "./itemcount.css";

export default function ItemCounter(props) {
  const [count, setCount] = useState(props.initial);
  function handleClickSuma() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleClickResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    alert("Producto agregado al carrito");
  }

  return (
    <div className="containerCount">
      <button onClick={handleClickResta}>-</button>
      <h3>{count}</h3>
      <button onClick={handleClickSuma}>+</button>
      <button onClick={onAdd}> Agregar al Carrito</button>
    </div>
  );
}
