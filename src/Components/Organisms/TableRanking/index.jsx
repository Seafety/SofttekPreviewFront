import React from "react";
import styles from "../TableRanking/index.module.scss";
import alert_red from "../../../Assets/alert-red.svg";

const RankingTable = ({ data }) => {
    const getIcon = (value, index) => {
        if (index < 3) {
            if (value !== 0) return <img src={alert_red} alt="Alert Icon" className={styles.alertIcon} />;
        }
  
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.table}>
                <div className={styles.headerRow}>
                    <div className={styles.rankHeader}>Rank</div>
                    <div className={styles.nameHeader}>Módulo SAP</div>
                    <div className={styles.deviationHeader}>Desvio - Custo</div>
                    <div className={styles.statusHeader}></div>
                </div>
                {data.map((row, index) => (
                    <div key={index} className={styles.row}>
                        <div className={styles.rankCell}>#{index + 1}</div>
                        <div className={styles.nameCell}>{row.name}</div>
                        <div className={styles.deviationCell}>R$ {row.deviation.toLocaleString()}</div>
                        <div className={styles.statusCell}>
                            {getIcon(row.deviation, index)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RankingTable;
