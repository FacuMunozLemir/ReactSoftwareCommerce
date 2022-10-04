import { Link } from "react-router-dom";
import "./item.css";

export default function Card(item) {
  const urlDetalle = `/detalle/${item.id}`;
  return (
    <div className="card">
      <h4>{item.nombre}</h4>
      <img src={item.imagen} alt="" />
      <p>{item.descripcion}</p>
      <p className="precio">Valor: ${item.precio}</p>
      <Link to={urlDetalle} className="btnDescripcion">
        Descripción
      </Link>
    </div>
  );
}
