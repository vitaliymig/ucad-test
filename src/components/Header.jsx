import { Link } from "react-router-dom";
import logo from "../img/UKAD_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container-wide">
        <nav className="navbar display-flex">
          <Link className="logo" to="/">
            <img src={logo} alt="UKAD" />
          </Link>
          <ul className="navabar__nav display-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
