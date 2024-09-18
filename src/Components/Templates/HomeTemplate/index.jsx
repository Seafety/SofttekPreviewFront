import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";
import styles from "./index.module.scss";

function HomeTemplate({ children }) {
  return (
    <div className={styles.homeTemplate}>
      <SubNavDash />  
      {children}
    </div>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
