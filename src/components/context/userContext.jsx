//Importamos e iniciaizamos nuestro CreateContext

import React, { createContext } from "react";

const userContext = createContext({ username: "anonymus", logedIn: false });

// Definimos nuestro provider
export default function UserContextProvider(props) {
  console.log("tenemos context provider");
  return (
    <userContext.Provider
      value={{ logedIn: false, userLanguaje: "es", username: "anonymus" }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export { userContext };
