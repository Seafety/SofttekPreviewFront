import React from 'react';
import styles from './index.module.scss';

const CriticidadeBar = ({ criticidade }) => {
  return (
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
          <span key={index} className={styles.label}>{item.label}</span>
        ))}
      </div>
    </div>
  );
};

export default CriticidadeBar;
