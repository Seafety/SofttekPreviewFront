import React from "react";
import styles from "./index.module.scss";
import DashSection from "../../Templates/DashSectionTemplate";

const CriticidadeBar = () => {
  const criticidade = [
    { label: "Lowest", percentage: 22, color: "#b3e5fc" },
    { label: "Medium", percentage: 42, color: "#dcedc8" },
    { label: "High", percentage: 36, color: "#ef9a9a" },
  ];
  return (
    <DashSection title="Tickets por criticidade">
      <div className={styles.criticidadeBar}>
        <div className={styles.barContainer}>
          {criticidade.map((item, index) => (
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
          {criticidade.map((item, index) => (
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
