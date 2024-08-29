import React, { useEffect, useState } from "react";
import chamados from "../../../json/chamados.json"
import styles from "./index.module.scss";

const obterConsultoresPorModulo = (modulo) => {
  const consultoresPorModulo = {
    "SAP MM": ["John Doe", "Ava Yellow", "Mason Green"],
    "SAP SD": ["John Doe", "Emily White", "Ava Yellow", "Mason Green"],
    "SAP FICO": ["Jane Smith"],
    "SAP HR": ["Jane Smith", "Liam Purple"],
    "SAP HANA": ["Alice Brown", "Olivia Blue", "Lucas Red"],
    "SAP C/4HANA":["Alice Brown", "Olivia Blue", "Lucas Red"],
    "SAP BW": ["Alice Brown", "Sophia Grey", "Amelia Red"],
    "SAP PP": ["Bob Green"],
    "SAP QM": ["Bob Green"],
    "SAP CRM": ["Emily White"],
    "SAP PS": ["Michael Black", "Ella Brown"],
    "SAP FI": ["Michael Black", "Mia Brown"],
    "SAP ABAP": ["Olivia Blue", "Isabella Green", "Charlotte Grey", "Aiden Grey"],
    "SAP PO": ["William Purple", "Ethan Blue"],
    "SAP Fiori": ["William Purple", "Isabella Green", "Elijah Grey", "Charlotte Grey"],
    "SAP Basis": ["James White", "Harper White", "Noah Green"],
    "SAP Security": ["James White", "Harper White"],
    "SAP CO": ["Henry Blue", "Lucas Yellow"],
    "SAP SolMan": ["Henry Blue", "Lucas Yellow", "Charlotte Black"],
    "SAP S/4HANA": ["Lucas Red"],
    "SAP TM": ["Charlotte Black"],
    "SAP Ariba": ["Ella Brown"],
    "SAP SuccessFactors": ["Liam Purple"],
    "SAP Basis (Estagiário)": ["Noah Green"],
    "SAP PI": ["Emma Brown"],
    "SAP HCM": ["Aiden Grey"]
  };

  return consultoresPorModulo[modulo] || [];
};

const sortearConsultorPorModulo = (modulo) => {
  const consultores = obterConsultoresPorModulo(modulo);
  const randomIndex = Math.floor(Math.random() * consultores.length);
  return consultores[randomIndex] || ""; 
};


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
        key={`${item.id}-${index}`} 
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
      const data = chamados.demandas;
      const dataComConsultor = data.map(item => {
        const consultor = sortearConsultorPorModulo(item.modulo_chamado);
        return { ...item, consultor };
      });

     

      const categorizedData = {
        Backlog: dataComConsultor.filter(item => item.status_chamado === "Backlog"),
        "Em Andamento": dataComConsultor.filter(item => item.status_chamado === "Em Andamento"),
        Concluído: dataComConsultor.filter(item => item.status_chamado === "Concluído"),
        Cancelado: dataComConsultor.filter(item => item.status_chamado === "Cancelado"),
      };
      setColumns(categorizedData);
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
        const matchesSearchTerm = item.chamado
          .toString()
          .includes(searchTerm.toLowerCase());
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
