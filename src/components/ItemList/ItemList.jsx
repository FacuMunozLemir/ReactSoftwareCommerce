import Item from "../Item/Item";

export default function ItemList({ itemData }) {
  return itemData.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      nombre={item.nombre}
      imagen={item.img}
      descripcion={item.descripcion}
      precio={item.precio}
      stock={item.stock}
    />
  ));
}
