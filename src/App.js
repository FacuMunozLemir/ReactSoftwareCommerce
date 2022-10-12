import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserContextProvider from "./components/context/userContext";

import "./fontawesome";
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Catálogo de Software" />}
          />
          <Route
            path="/categoria/:SO"
            element={<ItemListContainer greeting="Catálogo de Software" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />

          {/* <Route path="*" element={<h1>404: URL no encontrada</h1>}></Route> */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

// 1 Instalar React Router dom
// 2 Configurar nuestro Routing
// 3 Definimos nuestras rutas
// 4 Reemplazar nuestras etiquetas <a> por <Link>

export default App;
