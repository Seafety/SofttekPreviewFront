import React from "react";
import { Link } from "react-router-dom";
import ModuleSelect from "../../Molecules/ModuleSelect";
import styles from "./index.module.scss";
const SubNavDash = () => {
  return (
    <section className={styles.subnave_section}>
      <nav className={styles.subnave_section_links}>
        <li>
          <Link to="/realtime">Real-Time</Link>
        </li>
        <li>
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
