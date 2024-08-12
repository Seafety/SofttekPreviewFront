import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";

const DashSection = ({ children, title, title_infobox }) => {
  return (
    <section className={styles.DashSection}>
      <div className={styles.section_header}>
        <h3>{title}</h3>
        <div className={styles.infoBoxContainer}>{title_infobox}</div>
      </div>
      <div className={styles.section_content}>{children}</div>
    </section>
  );
};
DashSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  title_infobox: PropTypes.node,
};
export default DashSection;
