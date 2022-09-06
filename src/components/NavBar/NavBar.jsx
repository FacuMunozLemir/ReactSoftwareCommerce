import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <p>Crystal Desarrollo</p>
      </div>
      <div className="subMenu">
        <ul>
          <li>
            <a href="#">Todos</a>
          </li>
          <li>
            <a href="#">Windows</a>
          </li>
          <li>
            <a href="#">Android</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
