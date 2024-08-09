import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModuleSelect from "../../Molecules/ModuleSelect";
import styles from "./index.module.scss";
const SubNavDash = () => {
  const location = useLocation();
  const [activeSubnav, setActiveSubNav] = useState("Real-Time");

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/realtime") {
      setActiveSubNav("Real-Time");
    } else if (path === "/forecasts") {
      setActiveSubNav("Forecast");
    }
  }, [location]);

  const toggleActiveSubnav = (SubNav) => {
    setActiveSubNav(SubNav);
  };
  return (
    <section className={styles.subnave_section}>
      <nav className={styles.subnave_section_links}>
        <li
          className={`${
            activeSubnav === "Real-Time"
              ? styles.subnave_section_links_active
              : ""
          }`}
          onClick={() => toggleActiveSubnav("Real-Time")}
        >
          <Link to="/realtime">Real-Time</Link>
        </li>
        <li
          className={`${
            activeSubnav === "Forecast"
              ? styles.subnave_section_links_active
              : ""
          }`}
          onClick={() => toggleActiveSubnav("Forecast")}
        >
          <Link to="/forecasts">Forecast</Link>
        </li>
      </nav>
      <span className={styles.subnave_section_span}>
        <ModuleSelect />
      </span>
    </section>
  );
};

export default SubNavDash;
