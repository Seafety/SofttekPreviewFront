import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import styles from "./index.module.scss";
import InfoBoxView from "../../Atoms/InfoBoxView";
import Status from "../../Atoms/Status";
import PropTypes from "prop-types";

const Area = ({
  nome,
  status,
  chamados_abertos,
  chamados_iniciado,
  avaliation,
  tempo_medio,
  capacidade,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Função para calcular a cor da capacidade
  const getCapacityColor = (capacidade) => {
    if (capacidade < 50) {
      // De verde (0,255,0) para amarelo (255,255,0)
      const green = 255;
      const red = Math.floor((255 * capacidade) / 50);
      return `rgb(${red}, ${green}, 0)`;
    } else if (capacidade < 75) {
      // De amarelo (255,255,0) para laranja (255,165,0)
      const red = 255;
      const green = Math.floor(255 - (90 * (capacidade - 50)) / 25); // Transição de 255 a 165
      return `rgb(${red}, ${green}, 0)`;
    } else {
      // De laranja (255,165,0) para vermelho (255,0,0)
      const red = 255;
      const green = Math.floor(165 - (165 * (capacidade - 75)) / 25);
      return `rgb(${red}, ${green}, 0)`;
    }
  };

  const chartData = {
    labels: ["Abertos", "Iniciados"],
    datasets: [
      {
        label: "Chamados",
        data: [chamados_abertos, chamados_iniciado],
        backgroundColor: ["#7367F0", "#FF9F43"],
        borderRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3, 3],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.areaContainer}>
      <div className={styles.areaHeader} onClick={toggleExpand}>
        <div className={styles.areaNome}>
          <span
            className={`${styles.arrowIcon} ${
              isExpanded ? styles.arrowExpanded : ""
            }`}
          >
            ▼
          </span>{" "}
          {nome}
        </div>
        <Status status={status} />
      </div>
      <div
        className={`${styles.areaContent} ${isExpanded ? styles.expanded : ""}`}
      >
        <div className={styles.chartContainer}>
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className={styles.dataContent}>
          <div className={styles.indicators}>
            <InfoBoxView
              title="Avaliação Média"
              color="#7fbe41"
              info={`${avaliation}`}
              type="rating"
            />
            <InfoBoxView
              title="Tempo Médio"
              color="#0d296e"
              info={`${tempo_medio}`}
              type="days"
            />
          </div>
          <div className={styles.capacityBar}>
            <span className={styles.capacityLabel}>Capacidade</span>
            <div className={styles.capacityTrack}>
              <div
                className={styles.capacityFill}
                style={{
                  width: `${capacidade}%`,
                  backgroundColor: getCapacityColor(capacidade),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Area.propTypes = {
  nome: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["normal", "anormal", "critico"]).isRequired,
  chamados_abertos: PropTypes.number.isRequired,
  chamados_iniciado: PropTypes.number.isRequired,
  avaliation: PropTypes.number.isRequired,
  tempo_medio: PropTypes.number.isRequired,
  capacidade: PropTypes.number.isRequired,
};

export default Area;
