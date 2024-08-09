// Header.jsx
import React, { useContext } from "react";
import Logo from "../../Atoms/Logo";
import { Link } from "react-router-dom";
import MenuIcon from "../../Atoms/MenuIcon";
import styles from "./index.module.scss";
import { HeaderContext } from "../../../Context/HeaderContext";

const HeaderComponent = () => {
  const { activeNav, onActiveNav } = useContext(HeaderContext);
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li
            className={`${styles.nav_li} ${
              activeNav === "DashBoard" ? styles.nav_li_active : ""
            }`}
            onClick={() => onActiveNav("DashBoard")}
          >
            <Link to="/">DashBoard</Link>
          </li>
          <li
            className={`${styles.nav_li} ${
              activeNav === "Contratos" ? styles.nav_li_active : ""
            }`}
            onClick={() => onActiveNav("Contratos")}
          >
            <Link to="/Contratos">Contratos</Link>
          </li>
          <li
            className={`${styles.nav_li} ${
              activeNav === "Times" ? styles.nav_li_active : ""
            }`}
            onClick={() => onActiveNav("Times")}
          >
            <Link to="/Times">Times</Link>
          </li>
        </ul>
      </nav>
      <MenuIcon />
    </header>
  );
};

export default HeaderComponent;
