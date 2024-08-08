// Header.jsx
import React from "react";
import Logo from "../../Atoms/Logo";
import { Link } from "react-router-dom";
import Menu from "../../Atoms/Menu";

const HeaderComponent = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">DashBoard</Link>
          </li>
          <li>
            <Link to="/Contratos">Contratos</Link>
          </li>
          <li>
            <Link to="/Times">Times</Link>
          </li>
        </ul>
      </nav>
      <Menu />
    </header>
  );
};

export default HeaderComponent;
