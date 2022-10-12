import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

// import React, { useContext } from "react";
// import { userContext } from "../context/userContext";

function NavBar() {
  // const micontext = useContext(userContext);
  return (
    <nav>
      <div className="logo">
        <Link className="p" to="/">
          Crystal Desarrollo
        </Link>
      </div>
      <div className="subMenu">
        <ul>
          <li>
            <Link to="/categoria/todos">Todos</Link>
          </li>
          <li>
            <Link to="/categoria/windows">Windows</Link>E
          </li>
          <li>
            <Link to="/categoria/android">Android</Link>
          </li>
          <li>
            <CartWidget />
            <Link to="#">Carrito</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
