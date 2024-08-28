import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import FinanceSection from "../../../Components/Organisms/FinanceSection";
import ContractsSection from "../../../Components/Organisms/ContractsSection";
import StatusArea from "../../../Components/Organisms/StatusArea";
import OpenTickets from "../../../Components/Organisms/OpenTickets";
import CriticidadeBar from "../../../Components/Molecules/CriticidadeBar";
import ComplexChart from "../../../Components/Organisms/ComplexChart";
import ConclusionChart from "../../../Components/Organisms/ConclusionChart";
import ChamadosConsultor from "../../../Components/Organisms/ChamadosConsultorSection";
import ConsultoresDisponiveis from "../../../Components/Organisms/ConsultoresDisponiveisSection";

const COMPONENTS = {
  StatusArea,
  FinanceSection,
  ContractsSection,
  ConsultoresDisponiveis,
  OpenTickets,
  ChamadosConsultor,
  ConclusionChart,
  CriticidadeBar,
  ComplexChart,
};

const isValidComponentKey = (key) => {
  return key && COMPONENTS[key];
};

const RealTime = () => {
  const [leftColumn, setLeftColumn] = useState(() => {
    const savedLeftColumn = localStorage.getItem("leftColumn");
    const parsedLeftColumn = savedLeftColumn ? JSON.parse(savedLeftColumn) : ["StatusArea", "FinanceSection", "ContractsSection", "ConclusionChart"];
    return parsedLeftColumn.filter(isValidComponentKey); 
  });

  const [rightColumn, setRightColumn] = useState(() => {
    const savedRightColumn = localStorage.getItem("rightColumn");
    const parsedRightColumn = savedRightColumn ? JSON.parse(savedRightColumn) : [
      "CriticidadeBar",
      "OpenTickets",
      "ConsultoresDisponiveis",
      "ChamadosConsultor",
      "ComplexChart",
    ];
    return parsedRightColumn.filter(isValidComponentKey); 
  });

  useEffect(() => {
    localStorage.setItem("leftColumn", JSON.stringify(leftColumn));
    localStorage.setItem("rightColumn", JSON.stringify(rightColumn));
  }, [leftColumn, rightColumn]);

  const handleDragStart = (e, index, column) => {
    e.dataTransfer.setData("draggedIndex", index);
    e.dataTransfer.setData("sourceColumn", column);
  };

  const handleDrop = (e, dropIndex, targetColumn, setColumn) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"));
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    let sourceColumnData, sourceSetColumn;

    if (sourceColumn === "left") {
      sourceColumnData = leftColumn;
      sourceSetColumn = setLeftColumn;
    } else {
      sourceColumnData = rightColumn;
      sourceSetColumn = setRightColumn;
    }

    const targetColumnData = targetColumn === "left" ? leftColumn : rightColumn;

    const [draggedItem] = sourceColumnData.splice(draggedIndex, 1);
    if (isValidComponentKey(draggedItem)) {
      targetColumnData.splice(dropIndex, 0, draggedItem);
    }

    sourceSetColumn([...sourceColumnData]);
    setColumn([...targetColumnData]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.container}>
      <div
        className={styles.column}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, leftColumn.length, "left", setLeftColumn)}
      >
        {leftColumn.map((componentKey, index) => {
          const Component = COMPONENTS[componentKey];
          
          if (!Component) {
            console.error(`Componente não encontrado para a chave: ${componentKey}`);
            return null;
          }

          return (
            <div
              key={componentKey}
              draggable
              onDragStart={(e) => handleDragStart(e, index, "left")}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index, "left", setLeftColumn)}
              className={styles.draggableComponent}
            >
              <Component />
            </div>
          );
        })}
      </div>

      <div
        className={styles.column}
        onDragOver={handleDragOver}
        onDrop={(e) =>
          handleDrop(e, rightColumn.length, "right", setRightColumn)
        }
      >
        {rightColumn.map((componentKey, index) => {
          const Component = COMPONENTS[componentKey];

          if (!Component) {
            console.error(`Componente não encontrado para a chave: ${componentKey}`);
            return null;
          }

          return (
            <div
              key={componentKey}
              draggable
              onDragStart={(e) => handleDragStart(e, index, "right")}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index, "right", setRightColumn)}
              className={styles.draggableComponent}
            >
              <Component />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RealTime;
