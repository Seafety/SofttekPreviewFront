import React, { useEffect, useState } from "react";
import chamados from "../../../json/chamados.json"
import styles from "./index.module.scss";

const KanbanCard = ({ item, index, columnName, handleDragStart }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const getComplexidadeClass = (complexidade) => {
    switch (complexidade) {
      case "N1":
        return `${styles.level} ${styles.level_N1}`;
      case "N2":
        return `${styles.level} ${styles.level_N2}`;
      case "N3":
        return `${styles.level} ${styles.level_N3}`;
      default:
        return styles.level;
    }
  };

  return (
    <div
      className={`${styles.kanbanCard} ${isExpanded ? styles.expanded : ""}`}
      draggable
      onDragStart={(e) => handleDragStart(e, index, columnName)}
      onClick={handleExpandClick}
    >
      <h4>{item.chamado}</h4>
      
      <p>Consultor: <strong>{item.consultor}</strong></p>
      <p>Módulo: {item.modulo_chamado}</p>
      <p className={getComplexidadeClass(item.complexidade)}>{item.complexidade}</p>

      {isExpanded && (
        <div className={styles.cardDetails}>
          <p>Projeto: {item.projeto}</p>
          <p>Data de Abertura: <strong>{item.dt_abertura_chamado}</strong></p>
          <p>Tipo de Chamado: {item.tipo_chamado}</p>
          <p>Tipo de Horas: {item.tipo_horas}</p>
          <p>IS: {item.is}</p>
        </div>
      )}
    </div>
  );
};

const KanbanColumn = ({
  status,
  columnData,
  handleDrop,
  handleDragOver,
  handleDragStart,
}) => {
  return (
    <div
      className={styles.kanbanColumn}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, columnData.length, status)}
    >
      <h3>{status}</h3>
      {columnData.map((item, index) => (
        <KanbanCard
          key={item.id}
          index={index}
          item={item}
          columnName={status}
          handleDragStart={handleDragStart}
        />
      ))}
    </div>
  );
};

const Kanban = () => {
  const initialColumns = {
    Backlog: [],
    "Em Andamento": [],
    Concluído: [],
    Cancelado: [],
  };

  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem("kanbanColumns");
    return savedColumns ? JSON.parse(savedColumns) : initialColumns;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplexidade, setSelectedComplexidade] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("kanbanColumns")) {
      const data = {
        Backlog: chamados.demandas.filter(
          (item) => item.status_chamado === "Backlog"
        ),
        "Em Andamento": chamados.demandas.filter(
          (item) => item.status_chamado === "Em Andamento"
        ),
        Concluído: chamados.demandas.filter(
          (item) => item.status_chamado === "Concluído"
        ),
        Cancelado: chamados.demandas.filter(
          (item) => item.status_chamado === "Cancelado"
        ),
      };
      setColumns(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("kanbanColumns", JSON.stringify(columns));
  }, [columns]);

  const handleDragStart = (e, index, columnName) => {
    e.dataTransfer.setData("draggedIndex", index);
    e.dataTransfer.setData("sourceColumn", columnName);
  };

  const handleDrop = (e, dropIndex, targetColumn) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("draggedIndex"));
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (sourceColumn === targetColumn) return;

    const sourceColumnData = [...columns[sourceColumn]];
    const [draggedItem] = sourceColumnData.splice(draggedIndex, 1);

    const targetColumnData = [...columns[targetColumn]];
    targetColumnData.splice(dropIndex, 0, draggedItem);

    setColumns({
      ...columns,
      [sourceColumn]: sourceColumnData,
      [targetColumn]: targetColumnData,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const filteredColumns = (columns) => {
    return Object.keys(columns).reduce((acc, columnName) => {
      acc[columnName] = columns[columnName].filter((item) => {
        
        const chamado = item.chamado ? item.chamado.toString().toLowerCase() : "";
        const owner = item.owner ? item.owner.toLowerCase() : "";
  
        
        const matchesSearchTerm =
          chamado.includes(searchTerm.toLowerCase()) || 
          owner.includes(searchTerm.toLowerCase()); // Filtro adicional para o owner
  
        const matchesComplexidade =
          selectedComplexidade === "" ||
          item.complexidade === selectedComplexidade;
  
        
        return matchesSearchTerm && matchesComplexidade;
      });
      return acc;
    }, {});
  };

  return (
    <div>
      <input
        type="text"
        className={styles.filterInput}
        placeholder="Filtrar por número do chamado"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className={styles.filterSelect}
        value={selectedComplexidade}
        onChange={(e) => setSelectedComplexidade(e.target.value)}
      >
        <option value="">Todas as Complexidades</option>
        <option value="N1">N1</option>
        <option value="N2">N2</option>
        <option value="N3">N3</option>
      </select>
      <div className={styles.kanbanContainer}>
        {Object.keys(filteredColumns(columns)).map((columnId) => (
          <KanbanColumn
            key={columnId}
            status={columnId}
            columnData={filteredColumns(columns)[columnId]}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
