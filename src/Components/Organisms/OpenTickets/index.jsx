import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faEquals,
} from "@fortawesome/free-solid-svg-icons";
import DashSection from "../../Templates/DashSectionTemplate";

const OpenTickets = () => {
  const chamados = [
    {
      dateTime: "24/08/2024 09:48:02",
      level: "N3",
      project: "Projeto_01",
      task: "TASK105597715-1",
      department: "Vendas",
      hours: "2,8",
      status: "up",
    },
    {
      dateTime: "22/08/2024 15:28:12",
      level: "N2",
      project: "Projeto_01",
      task: "TASK105721218-1",
      department: "Compras",
      hours: "0,5",
      status: "up",
    },
    {
      dateTime: "22/08/2024 16:12:08",
      level: "N1",
      project: "Projeto_01",
      task: "TASK10572364-1",
      department: "Infra",
      hours: "1,6",
      status: "neutral",
    },
    {
      dateTime: "24/08/2024 09:48:02",
      level: "N1",
      project: "Projeto_01",
      task: "TASK105595614-2",
      department: "Qualidade",
      hours: "0,7",
      status: "down",
    },
    {
      dateTime: "22/08/2024 16:12:08",
      level: "N2",
      project: "Projeto_01",
      task: "TASK10572364-1",
      department: "Infra",
      hours: "1,6",
      status: "neutral",
    },
    {
      dateTime: "24/08/2024 09:48:02",
      level: "N3",
      project: "Projeto_01",
      task: "TASK105595614-2",
      department: "Qualidade",
      hours: "0,7",
      status: "down",
    },
    {
      dateTime: "24/08/2024 09:48:02",
      level: "N3",
      project: "Projeto_01",
      task: "TASK105597715-1",
      department: "Vendas",
      hours: "2,8",
      status: "up",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "up":
        return (
          <FontAwesomeIcon icon={faChevronUp} className={styles.status_up} />
        );
      case "down":
        return (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles.status_down}
          />
        );
      case "neutral":
        return (
          <FontAwesomeIcon icon={faEquals} className={styles.status_neutral} />
        );
      default:
        return null;
    }
  };

  return (
    <DashSection title="Chamados abertos">
      <div className={styles.chamadosAbertos}>
        <div className={styles.chamadosList}>
          {chamados.map((chamado, index) => (
            <div key={index} className={styles.chamadoItem}>
              <div className={styles.dateTime}>{chamado.dateTime}</div>
              <div className={styles.level}>
                <span className={styles[`level_${chamado.level}`]}>
                  {chamado.level}
                </span>
              </div>
              <div className={styles.project}>{chamado.project}</div>
              <div className={styles.task}>{chamado.task}</div>
              <div className={styles.department}>{chamado.department}</div>
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
    </DashSection>
  );
};

export default OpenTickets;
