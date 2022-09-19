import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import "./fontawesome";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Catálogo de Software" />
    </div>
  );
}

export default App;
