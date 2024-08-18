import React from "react";
import styles from "./index.module.scss";
import DashSection from "../../Templates/DashSectionTemplate";

const Table = ({ headers, data }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={styles.tableHeader}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`${styles.tableCell} ${
                    cellIndex === 0
                      ? styles.lightGrayText
                      : cellIndex === 1
                      ? styles.boldText
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
