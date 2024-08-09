import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Status = ({ status }) => {
  const statusClass = {
    normal: styles.status_normal,
    anormal: styles.status_anormal,
    critico: styles.status_critico,
  }[status];

  return (
    <div className={styles.status}>
      <div className={statusClass}>{status}</div>
    </div>
  );
};

Status.propTypes = {
  status: PropTypes.oneOf(["normal", "anormal", "critico"]).isRequired,
};
export default Status;
