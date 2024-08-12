import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const InfoBoxView = ({ title, color, info, type }) => {
  // Função para formatar o valor com base no tipo
  const formatInfo = () => {
    switch (type) {
      case "money":
        return (
          <span
            style={{
              color:
                parseFloat(info.replace("R$", "").replace(",", ".")) < 0
                  ? "red"
                  : "green",
            }}
          >
            {info}
          </span>
        );
      case "days":
        return `${info} dias`;
      case "rating":
        return `${info}/5`;
      default:
        return info;
    }
  };

  return (
    <div className={styles.infoBox}>
      <h5 className={styles.infoBox_title} style={{ backgroundColor: color }}>
        {title}
      </h5>
      <p className={styles.infoBox_info}>{formatInfo()}</p>
    </div>
  );
};

InfoBoxView.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["money", "days", "rating"]).isRequired,
};

export default InfoBoxView;
