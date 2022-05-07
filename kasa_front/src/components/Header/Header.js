import React from "react";
import "../../styles/components/navbar/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/kasa-logo.png";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className="header__logo" src={Logo} alt="" />
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/about"}> à propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
