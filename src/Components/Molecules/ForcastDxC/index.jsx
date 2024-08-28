import React, { useState } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import styles from "./index.module.scss";
import Status from "../../Atoms/Status";

const ForcastDxC = ({
  moduleName,
  status,
  chamadosForecasts,
  capacidadeForecasts,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const normalizedStatus = status.toLowerCase();

  const data = {
    labels: ["Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Previsão de Chamados",
        data: [
          chamadosForecasts.outubro,
          chamadosForecasts.novembro,
          chamadosForecasts.dezembro,
        ],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Previsão de Capacidade",
        data: [
          capacidadeForecasts.outubro,
          capacidadeForecasts.novembro,
          capacidadeForecasts.dezembro,
        ],
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.forcastContainer}>
      <div className={styles.header} onClick={toggleExpand}>
        <div className={styles.areaNome}>
          <span
            className={`${styles.arrowIcon} ${
              isExpanded ? styles.arrowExpanded : ""
            }`}
          >
            ▼
          </span>
          {moduleName}
        </div>
        <Status status={normalizedStatus} />
      </div>
      <div
        className={`${styles.chartContent} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <div className={styles.chartContainer}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

ForcastDxC.propTypes = {
  moduleName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["NORMAL", "ANORMAL", "CRITICO"]).isRequired,
  chamadosForecasts: PropTypes.shape({
    outubro: PropTypes.number.isRequired,
    novembro: PropTypes.number.isRequired,
    dezembro: PropTypes.number.isRequired,
  }).isRequired,
  capacidadeForecasts: PropTypes.shape({
    outubro: PropTypes.number.isRequired,
    novembro: PropTypes.number.isRequired,
    dezembro: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForcastDxC;
