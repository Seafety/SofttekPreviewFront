import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ModuleSelect from "../../Molecules/ModuleSelect";
import styles from "./index.module.scss";

const SubNavDash = () => {
  const location = useLocation();
  const [activeSubnav, setActiveSubNav] = useState("");

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === "/realtime" || path === "/") {
      setActiveSubNav("Real-Time");
    } else if (path === "/forecasts") {
      setActiveSubNav("Forecast");
    } else if (path === "/demandas/data") {
      setActiveSubNav("Data");
    } else if (path === "/demandas/board") {
      setActiveSubNav("Board");
    }
  }, [location]);

  const toggleActiveSubnav = (SubNav) => {
    setActiveSubNav(SubNav);
  };

  return (
    <section className={styles.subnave_section}>
      <nav className={styles.subnave_section_links}>
        {(location.pathname === "/" || location.pathname.startsWith("/realtime") || location.pathname.startsWith("/forecasts")) && (
          <>
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
          </>
        )}

        {/* Itens que só aparecem para Demandas */}
        {location.pathname.startsWith("/demandas") && (
          <>
            <li
              className={`${
                activeSubnav === "Data"
                  ? styles.subnave_section_links_active
                  : ""
              }`}
              onClick={() => toggleActiveSubnav("Data")}
            >
              <Link to="/demandas/data">Data</Link>
            </li>
            <li
              className={`${
                activeSubnav === "Board"
                  ? styles.subnave_section_links_active
                  : ""
              }`}
              onClick={() => toggleActiveSubnav("Board")}
            >
              <Link to="/demandas/board">Board</Link>
            </li>
          </>
        )}
      </nav>
      <span className={styles.subnave_section_span}>
        <ModuleSelect />
      </span>
    </section>
  );
};

export default SubNavDash;
