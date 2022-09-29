import "./item.css";

export default function Card(item) {
  return (
    <div className="card">
      <h4>{item.nombre}</h4>
      <img src={item.imagen} alt="" />
      <p>{item.descripcion}</p>
      <p className="precio">Valor: ${item.precio}</p>
      <a href="#" className="btnDescripcion">
        Descripción
      </a>
    </div>
  );
}
