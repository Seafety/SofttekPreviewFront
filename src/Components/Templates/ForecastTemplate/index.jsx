import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";
import styles from "../DemandasTemplate/index.module.scss";

function ForecastTemplate({ children }) {
    return (
      <>
        <SubNavDash />
        <div className={styles.gridContainer}>
          {children}
        </div>
      </>
    );
  }
  
  ForecastTemplate.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default ForecastTemplate;