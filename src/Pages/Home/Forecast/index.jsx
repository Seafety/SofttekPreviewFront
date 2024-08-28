import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import AreaForcasts from "../../../Components/Organisms/AreaForcasts";
import FinanceForcasts from "../../../Components/Organisms/FinanceForcasts";
import ComplexityChartForcasts from "../../../Components/Organisms/ComplexChartForcasts";
import ConsultorAusenciaForcast from "../../../Components/Organisms/ConsultorAusenciaForcast";
import ConsultorFeriasSugestao from "../../../Components/Organisms/SugestaoFeriasForcast";
import ContractsForecastSection from "../../../Components/Organisms/ContractsForcasts";

const COMPONENTS = {
  AreaForcasts,
  FinanceForcasts,
  ComplexityChartForcasts,
  ConsultorAusenciaForcast,
  ConsultorFeriasSugestao,
  ContractsForecastSection,
};

const isValidComponentKey = (key) => {
  return key && COMPONENTS[key];
};

const Forecast = () => {
  const [leftColumn, setLeftColumn] = useState(() => {
    const savedLeftColumn = localStorage.getItem("forecastLeftColumn");
    const parsedLeftColumn = savedLeftColumn ? JSON.parse(savedLeftColumn) : ["AreaForcasts", "ConsultorAusenciaForcast"];
    return parsedLeftColumn.filter(isValidComponentKey); 
  });

  const [rightColumn, setRightColumn] = useState(() => {
    const savedRightColumn = localStorage.getItem("forecastRightColumn");
    const parsedRightColumn = savedRightColumn ? JSON.parse(savedRightColumn) : [
      "FinanceForcasts",
      "ComplexityChartForcasts",
      "ConsultorFeriasSugestao",
      "ContractsForecastSection",
    ];
    return parsedRightColumn.filter(isValidComponentKey); 
  });

  useEffect(() => {
    localStorage.setItem("forecastLeftColumn", JSON.stringify(leftColumn));
    localStorage.setItem("forecastRightColumn", JSON.stringify(rightColumn));
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

export default Forecast;
