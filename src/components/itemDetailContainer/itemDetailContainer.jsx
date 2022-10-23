import React from "react";
import { useState, useEffect } from "react";
import { getSingleElement } from "../../services/mockAPI";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Orbit } from '@uiball/loaders'



import "./itemdetailcontainer.css";

function ItemDetailContainer() {
  const id = useParams().id;

  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoadiong] = useState(true);

  useEffect(() => {
    setIsLoadiong(true);
    if (id === undefined){
      getSingleElement()
      .then((respuestaDatos) => setItem(respuestaDatos))
      .finally(() => setIsLoadiong(false));
    } else{
      getSingleElement(id)
    }
    getSingleElement(id)
    .then((respuestaDatos) => setItem(respuestaDatos))
    // .catch((errormsg) => setError(errormsg.message))
    .finally (() => setIsLoadiong(false))
  }, [id]);



    return (
      <div>
          {isLoading && 
                      <Orbit 
                      size={25}
                      speed={1.5} 
                      color="black" 
                      />}
          {/* {error ? 
            <div>
              <h3 style={{color: "#aa0033"}}>Error obteniendo los datos
              </h3>
              <p>{error}</p>
            </div> 
           : 
            <h3>Cargando...</h3>} */}
          <div className="itemDetailContainer">
            <ItemDetail
              key = {item.id}
              id = {item.id}
              nombre={item.nombre}
              stock={item.stock}
              categoria={item.categoria}
              descripcion={item.descripcion}
              img={item.img}
              precio={item.precio}
            />
          </div>
      </div>
    ) 
  

  // return (
  //   // <div className="itemDetailContainer">
  //   //   <ItemDetail
  //   //     id = {item.id}
  //   //     nombre={item.nombre}
  //   //     stock={item.stock}
  //   //     categoria={item.categoria}
  //   //     descripcion={item.descripcion}
  //   //     img={item.img}
  //   //     precio={item.precio}
  //   //   />
  //   // </div>
  // );
}

export default ItemDetailContainer;
