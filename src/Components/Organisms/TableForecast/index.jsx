import React from 'react';
import styles from '../TableForecast/index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faEquals, faUser, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const TableForecast = ({ data }) => {
  const getIcon = (iconType) => {
    switch (iconType) {
        case 'up2':
        return <FontAwesomeIcon icon={faCaretUp} className={styles.icon_up2} />;
      case 'up':
        return <FontAwesomeIcon icon={faChevronUp} className={styles.icon_up} />;
      case 'down':
        return <FontAwesomeIcon icon={faChevronDown} className={styles.icon_down} />;
      case 'neutral':
        return <FontAwesomeIcon icon={faEquals} className={styles.icon_neutral} />;
      case 'estagiario':
        return <FontAwesomeIcon icon={faUser} className={styles.icon_estagiario} />;
      case 'junior':
        return <FontAwesomeIcon icon={faUser} className={styles.icon_junior} />;
      case 'pleno':
        return <FontAwesomeIcon icon={faUser} className={styles.icon_pleno} />;
      case 'senior':
        return <FontAwesomeIcon icon={faUser} className={styles.icon_senior} />;
      case 'expert':
        return <FontAwesomeIcon icon={faUser} className={styles.icon_expert} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        <div className={styles.headerRow}>
            <div className={styles.nullHeader}></div>
            <div className={styles.nullHeader}></div>
            <div className={styles.lastQuarterHeader}>Último Trimestre</div>
            <div className={styles.futureProjectionHeader}>Projeção Futura</div>
            <div className={styles.nullHeader}></div>
        </div>
        {data.map((row, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.iconCell}>
              {getIcon(row.icon)}
            </div>
            <div className={styles.nameCell}>
              {row.name}
            </div>
            <div className={styles.lastQuarterCell}>
              {row.lastQuarter}
            </div>
            <div className={styles.futureProjectionCell}>
              {row.futureProjection}
            </div>
            <div className={styles.statusCell}>
              {getIcon(row.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableForecast;
