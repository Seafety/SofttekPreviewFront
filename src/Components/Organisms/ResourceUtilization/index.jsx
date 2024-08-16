import React from 'react';
import styles from '../ResourceUtilization/index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircle } from '@fortawesome/free-solid-svg-icons';

const getIcon = (role) => {
    switch (role) {
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
  

  const ResourceUtilization = ({ resources }) => {
    return (
        <div className={styles.resourceUtilization}>
             <div className={styles.legend}>
        <div className={styles.legendItem}>
          <FontAwesomeIcon icon={faCircle} className={styles.legendIcon} style={{ color: 'rgba(13, 41, 110, 0.60)' }} />
          <span>Hrs Ocupadas</span>
        </div>
        <div className={styles.legendItem}>
          <FontAwesomeIcon icon={faCircle} className={styles.legendIcon} style={{ color: '#d9d9d9' }} />
          <span>Hrs Livres</span>
        </div>
      </div>
            {resources.map(resource => (
                <div key={resource.name} className={`${styles.resource} ${styles[`resource-${resource.name}`]}`}>
                    <div className={styles.resourceHeader}>
                        {getIcon(resource.role)}
                        <span>{resource.name}</span>
                    </div>
                    <div className={styles.barContainer}>
                        <div className={styles.bar}>
                            <div 
                                className={styles.occupied}
                                style={{ width: `${resource.occupied}%` }}
                            ></div>
                            <div 
                                className={styles.free}
                                style={{ width: `${100 - resource.occupied}%` }}
                            ></div>
                        </div>
                        <div className={styles.percentage}>
                            {`${resource.occupied}%`}
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    );
    
    
      
      
  };

export default ResourceUtilization;
