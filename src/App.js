import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartContextProvider from "./components/context/cartContext";
import "./fontawesome";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/404/404";


function App() {


  return (
    <CartContextProvider>
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
          <Route path="/checkout/:orderid" element={<Checkout/>}></Route>
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
