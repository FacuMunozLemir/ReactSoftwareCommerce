import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

import "./fontawesome";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Catálogo de Software" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
