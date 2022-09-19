import getItems from "../../services/mockAPI";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function ItemList(props) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
      console.log("ejecutamos getItems");
    });
  }, []);

  return data.map((item) => {
    console.log("item");
    return (
      <Card
        key={item.id}
        titulo={item.tituo}
        precio={item.precio}
        stock={item.stock}
      />
    );
  });
}
