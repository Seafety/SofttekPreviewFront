import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import Area from "../../Molecules/Area";
import styles from "./index.module.scss"; 

const StatusArea = () => {
  const areasData = [
    {
      nome: "Materials Management (MM)",
      status: "CRITICO",
      chamados_abertos: 500,
      chamados_iniciado: 120,
      avaliation: 2.0,
      tempo_medio: 15,
      capacidade: 95,
    },
    {
      nome: "Controlling (CO)",
      status: "ANORMAL",
      chamados_abertos: 300,
      chamados_iniciado: 80,
      avaliation: 3.2,
      tempo_medio: 8,
      capacidade: 70,
    },
    {
      nome: "Sales and Distribution (SD)",
      status: "CRITICO",
      chamados_abertos: 450,
      chamados_iniciado: 200,
      avaliation: 1.8,
      tempo_medio: 12,
      capacidade: 90,
    },
    {
      nome: "Production Planning (PP)",
      status: "NORMAL",
      chamados_abertos: 150,
      chamados_iniciado: 50,
      avaliation: 4.6,
      tempo_medio: 3,
      capacidade: 60,
    },
    {
      nome: "Quality Management (QM)",
      status: "ANORMAL",
      chamados_abertos: 280,
      chamados_iniciado: 130,
      avaliation: 3.0,
      tempo_medio: 9,
      capacidade: 75,
    },
    {
      nome: "Plant Maintenance (PM)",
      status: "NORMAL",
      chamados_abertos: 100,
      chamados_iniciado: 40,
      avaliation: 4.8,
      tempo_medio: 2,
      capacidade: 50,
    },
    {
      nome: "Human Resources (HR)",
      status: "CRITICO",
      chamados_abertos: 550,
      chamados_iniciado: 250,
      avaliation: 2.1,
      tempo_medio: 14,
      capacidade: 95,
    },
    {
      nome: "Project System (PS)",
      status: "NORMAL",
      chamados_abertos: 120,
      chamados_iniciado: 60,
      avaliation: 4.5,
      tempo_medio: 3,
      capacidade: 65,
    },
    {
      nome: "Logistics Execution (LE)",
      status: "ANORMAL",
      chamados_abertos: 320,
      chamados_iniciado: 160,
      avaliation: 3.4,
      tempo_medio: 10,
      capacidade: 80,
    },
    {
      nome: "Warehouse Management (WM)",
      status: "NORMAL",
      chamados_abertos: 90,
      chamados_iniciado: 35,
      avaliation: 4.3,
      tempo_medio: 2,
      capacidade: 55,
    },
    {
      nome: "Customer Service (CS)",
      status: "ANORMAL",
      chamados_abertos: 400,
      chamados_iniciado: 180,
      avaliation: 3.1,
      tempo_medio: 7,
      capacidade: 85,
    },
    {
      nome: "Supplier Relationship Management (SRM)",
      status: "NORMAL",
      chamados_abertos: 110,
      chamados_iniciado: 45,
      avaliation: 4.4,
      tempo_medio: 3,
      capacidade: 70,
    },
    {
      nome: "Business Intelligence (BI)",
      status: "CRITICO",
      chamados_abertos: 600,
      chamados_iniciado: 300,
      avaliation: 1.9,
      tempo_medio: 16,
      capacidade: 100,
    },
    {
      nome: "Advanced Business Application Programming (ABAP)",
      status: "NORMAL",
      chamados_abertos: 150,
      chamados_iniciado: 50,
      avaliation: 4.7,
      tempo_medio: 3,
      capacidade: 60,
    },
    {
      nome: "Process Integration (PI)",
      status: "CRITICO",
      chamados_abertos: 520,
      chamados_iniciado: 240,
      avaliation: 2.2,
      tempo_medio: 12,
      capacidade: 95,
    },
    {
      nome: "Treasury (TR)",
      status: "CRITICO",
      chamados_abertos: 130,
      chamados_iniciado: 60,
      avaliation: 2.3,
      tempo_medio: 13,
      capacidade: 125,
    },
    {
      nome: "Logistics (LO)",
      status: "NORMAL",
      chamados_abertos: 200,
      chamados_iniciado: 80,
      avaliation: 4.0,
      tempo_medio: 6,
      capacidade: 75,
    },
    {
      nome: "Extended Warehouse Management (EWM)",
      status: "CRITICO",
      chamados_abertos: 140,
      chamados_iniciado: 70,
      avaliation: 2.5,
      tempo_medio: 15,
      capacidade: 135,
    },
  ];
  const priority = {
    CRITICO: 1,
    ANORMAL: 2,
    NORMAL: 3,
  };

  const sortedAreasData = areasData.sort(
    (a, b) => priority[a.status] - priority[b.status]
  );

  return (
    <DashSection title="Status das Áreas">
      <div className={styles.scrollContainer}>
        {sortedAreasData.map((area, index) => (
          <Area
            key={index}
            nome={area.nome}
            status={area.status}
            chamados_abertos={area.chamados_abertos}
            chamados_iniciado={area.chamados_iniciado}
            avaliation={area.avaliation}
            tempo_medio={area.tempo_medio}
            capacidade={area.capacidade}
          />
        ))}
      </div>
    </DashSection>
  );
};

export default StatusArea;
