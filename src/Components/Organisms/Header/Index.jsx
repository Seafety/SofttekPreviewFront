// Header.jsx
import React, { useEffect, useState } from "react";
import Logo from "../../Atoms/Logo";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../Atoms/MenuIcon";
import styles from "./index.module.scss";
import UserProfile from "../../Molecules/UserProfile/index.jsx";

const HeaderComponent = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/realtime" || path === "/forecasts" || path === "/") {
      setActiveNav("DashBoard");
    } else if (path === "/contratos") {
      setActiveNav("Contratos");
    } else if (path === "/times") {
      setActiveNav("Times");
    }
    else if (path === "/demandas" || path === "/data" || path === "/board") {
      setActiveNav("Demandas")
    }
  }, [location]);

  const [selectedUserId, setSelectedUserId] = useState(1); // Use número em vez de string

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li
            className={`${styles.nav_li} ${
              activeNav === "DashBoard" ? styles.nav_li_active : ""
            }`}
            onClick={() => setActiveNav("DashBoard")}
          >
            <Link to="/">DashBoard</Link>
          </li>
          <li
            className={`${styles.nav_li} ${
              activeNav === "Demandas" ? styles.nav_li_active : ""
            }`}
            onClick={() => setActiveNav("Demandas")}
          >
            <Link to="/demandas">Demandas</Link>
          </li>
          <li
            className={`${styles.nav_li} ${
              activeNav === "Contratos" ? styles.nav_li_active : ""
            }`}
            onClick={() => setActiveNav("Contratos")}
          >
            <Link to="/contratos">Contratos</Link>
          </li>
          <li
            className={`${styles.nav_li} ${
              activeNav === "Times" ? styles.nav_li_active : ""
            }`}
            onClick={() => setActiveNav("Times")}
          >
            <Link to="/times">Times</Link>
          </li>
        </ul>
      </nav>

      <div>
      <UserProfile userId={selectedUserId} />
      </div>

      
    </header>
  );
};

export default HeaderComponent;
