import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faEquals } from '@fortawesome/free-solid-svg-icons'

const OpenTickets = ({ chamados }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'up':
        return <FontAwesomeIcon icon={faChevronUp} className={styles.status_up} />;
      case 'down':
        return <FontAwesomeIcon icon={faChevronDown} className={styles.status_down} />;
        case 'neutral':
            return <FontAwesomeIcon icon={faEquals} className={styles.status_neutral} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.chamadosAbertos}>
      <div className={styles.chamadosList}>
        {chamados.map((chamado, index) => (
          <div key={index} className={styles.chamadoItem}>
            <div className={styles.dateTime}>
              {chamado.dateTime}
            </div>
            <div className={styles.level}>
              <span className={styles[`level_${chamado.level}`]}>{chamado.level}</span>
            </div>
            <div className={styles.project}>
              {chamado.project}
            </div>
            <div className={styles.task}>
              {chamado.task}
            </div>
            <div className={styles.department}>
              {chamado.department}
            </div>
            <div className={styles.hours}>
              <strong> {chamado.hours}</strong> Horas
            </div>
            <div className={styles.statusIcon}>
                {getStatusIcon(chamado.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenTickets;
