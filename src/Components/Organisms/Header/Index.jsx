// Header.jsx
import React from "react";
import Logo from "../../Atoms/Logo";
import { Link } from "react-router-dom";
import Menu from "../../Atoms/Menu";
import styles from "./index.module.scss";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
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
