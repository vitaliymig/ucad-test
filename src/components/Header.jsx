import { Link } from "react-router-dom";
import logo from "../img/UKAD_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            <img src={logo} alt="UKAD" />
          </Link>
          <ul className="navabar__nav">
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
