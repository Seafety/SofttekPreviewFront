import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";
import styles from "./index.module.scss";

function DemandasTemplate({ children }) {
  return (
    <>
      <SubNavDash />
      <div className={styles.gridContainer}>
        {children}
      </div>
    </>
  );
}

DemandasTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DemandasTemplate;
