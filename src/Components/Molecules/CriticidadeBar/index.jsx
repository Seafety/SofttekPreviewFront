import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import DashSection from "../../Templates/DashSectionTemplate";

const CriticidadeBar = ({ contract }) => {
  const generateRandomCriticidade = () => {
    const percentages = Array.from({ length: 3 }, () => Math.floor(Math.random() * 40) + 20);
    const total = percentages.reduce((acc, value) => acc + value, 0);

    // Normalize the percentages to ensure they sum up to 100%
    return percentages.map((value) => Math.round((value / total) * 100));
  };

  const [criticidade, setCriticidade] = useState(generateRandomCriticidade());

  useEffect(() => {
    setCriticidade(generateRandomCriticidade());
  }, [contract]); // Recalcula quando o contrato muda

  const criticidadeData = [
    { label: "Lowest", percentage: criticidade[0], color: "#b3e5fc" },
    { label: "Medium", percentage: criticidade[1], color: "#dcedc8" },
    { label: "High", percentage: criticidade[2], color: "#ef9a9a" },
  ];

  return (
    <DashSection title="Tickets por criticidade">
      <div className={styles.criticidadeBar}>
        <div className={styles.barContainer}>
          {criticidadeData.map((item, index) => (
            <div
              key={index}
              className={styles.barSegment}
              style={{
                backgroundColor: item.color,
                flex: item.percentage,
              }}
              data-tooltip={`${item.percentage}%`}
            >
              <span className={styles.percentage}>{item.percentage}%</span>
            </div>
          ))}
        </div>
        <div className={styles.labels}>
          {criticidadeData.map((item, index) => (
            <span key={index} className={styles.label}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </DashSection>
  );
};

export default CriticidadeBar;
