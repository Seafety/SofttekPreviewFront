import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import AreaForcasts from "../../../Components/Organisms/AreaForcasts";
import StatusArea from "../../../Components/Organisms/StatusArea";
import FinanceSection from "../../../Components/Organisms/FinanceSection";
import ContractsSection from "../../../Components/Organisms/ContractsSection";

const COMPONENTS = {
  AreaForcasts,
  StatusArea,
  FinanceSection,
  ContractsSection,
};

const Forecast = () => {
  const [leftColumn, setLeftColumn] = useState(() => {
    const savedLeftColumn = localStorage.getItem("forecastLeftColumn");
    return savedLeftColumn
      ? JSON.parse(savedLeftColumn)
      : ["AreaForcasts", "StatusArea"];
  });

  const [rightColumn, setRightColumn] = useState(() => {
    const savedRightColumn = localStorage.getItem("forecastRightColumn");
    return savedRightColumn
      ? JSON.parse(savedRightColumn)
      : ["FinanceSection", "ContractsSection"];
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
    targetColumnData.splice(dropIndex, 0, draggedItem);

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
