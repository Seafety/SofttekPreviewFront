import React from "react";
import styles from "./index.module.scss";
import DashSection from "../../Templates/DashSectionTemplate";
import ForcastDxC from "../../Molecules/ForcastDxC";

const AreaForcasts = () => {
  // Dados mockados para o exemplo

  const forecastsData = [
    {
      moduleName: "Materials Management (MM)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 100,
          novembro: 140,
          dezembro: 140,
        },
        capacidade: {
          outubro: 110,
          novembro: 120,
          dezembro: 120,
        },
      },
    },
    {
      moduleName: "Controlling (CO)",
      status: "ANORMAL",
      forecasts: {
        chamados: {
          outubro: 80,
          novembro: 85,
          dezembro: 90,
        },
        capacidade: {
          outubro: 75,
          novembro: 83,
          dezembro: 88,
        },
      },
    },
    {
      moduleName: "Sales and Distribution (SD)",
      status: "ANORMAL",
      forecasts: {
        chamados: {
          outubro: 90,
          novembro: 100,
          dezembro: 105,
        },
        capacidade: {
          outubro: 85,
          novembro: 98,
          dezembro: 100,
        },
      },
    },
    {
      moduleName: "Production Planning (PP)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 70,
          novembro: 75,
          dezembro: 68,
        },
        capacidade: {
          outubro: 90,
          novembro: 95,
          dezembro: 90,
        },
      },
    },
    {
      moduleName: "Quality Management (QM)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 50,
          novembro: 55,
          dezembro: 52,
        },
        capacidade: {
          outubro: 60,
          novembro: 65,
          dezembro: 62,
        },
      },
    },
    {
      moduleName: "Plant Maintenance (PM)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 45,
          novembro: 50,
          dezembro: 48,
        },
        capacidade: {
          outubro: 60,
          novembro: 65,
          dezembro: 62,
        },
      },
    },
    {
      moduleName: "Human Resources (HR)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 90,
          novembro: 110,
          dezembro: 105,
        },
        capacidade: {
          outubro: 76,
          novembro: 80,
          dezembro: 90,
        },
      },
    },
    {
      moduleName: "Project System (PS)",
      status: "ANORMAL",
      forecasts: {
        chamados: {
          outubro: 85,
          novembro: 95,
          dezembro: 88,
        },
        capacidade: {
          outubro: 80,
          novembro: 90,
          dezembro: 85,
        },
      },
    },
    {
      moduleName: "Logistics Execution (LE)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 75,
          novembro: 80,
          dezembro: 78,
        },
        capacidade: {
          outubro: 90,
          novembro: 95,
          dezembro: 92,
        },
      },
    },
    {
      moduleName: "Warehouse Management (WM)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 65,
          novembro: 70,
          dezembro: 68,
        },
        capacidade: {
          outubro: 80,
          novembro: 85,
          dezembro: 82,
        },
      },
    },
    {
      moduleName: "Customer Service (CS)",
      status: "ANORMAL",
      forecasts: {
        chamados: {
          outubro: 110,
          novembro: 120,
          dezembro: 115,
        },
        capacidade: {
          outubro: 105,
          novembro: 118,
          dezembro: 112,
        },
      },
    },
    {
      moduleName: "Supplier Relationship Management (SRM)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 110,
          novembro: 120,
          dezembro: 115,
        },
        capacidade: {
          outubro: 120,
          novembro: 125,
          dezembro: 123,
        },
      },
    },
    {
      moduleName: "Business Intelligence (BI)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 130,
          novembro: 140,
          dezembro: 135,
        },
        capacidade: {
          outubro: 100,
          novembro: 100,
          dezembro: 110,
        },
      },
    },
    {
      moduleName: "Advanced Business Application Programming (ABAP)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 60,
          novembro: 70,
          dezembro: 65,
        },
        capacidade: {
          outubro: 80,
          novembro: 90,
          dezembro: 85,
        },
      },
    },
    {
      moduleName: "Process Integration (PI)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 100,
          novembro: 150,
          dezembro: 160,
        },
        capacidade: {
          outubro: 110,
          novembro: 110,
          dezembro: 120,
        },
      },
    },
    {
      moduleName: "Treasury (TR)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 130,
          novembro: 120,
          dezembro: 140,
        },
        capacidade: {
          outubro: 120,
          novembro: 130,
          dezembro: 125,
        },
      },
    },
    {
      moduleName: "Logistics (LO)",
      status: "NORMAL",
      forecasts: {
        chamados: {
          outubro: 55,
          novembro: 60,
          dezembro: 58,
        },
        capacidade: {
          outubro: 70,
          novembro: 75,
          dezembro: 72,
        },
      },
    },
    {
      moduleName: "Extended Warehouse Management (EWM)",
      status: "CRITICO",
      forecasts: {
        chamados: {
          outubro: 140,
          novembro: 150,
          dezembro: 145,
        },
        capacidade: {
          outubro: 130,
          novembro: 140,
          dezembro: 135,
        },
      },
    },
  ];

  const priority = {
    CRITICO: 1,
    ANORMAL: 2,
    NORMAL: 3,
  };

  const sortedForecastsData = forecastsData.sort(
    (a, b) => priority[a.status] - priority[b.status]
  );

  return (
    <DashSection title="Previsão dos Chamados e Capacidade">
      <div className={styles.scrollContainer}>
        {sortedForecastsData.map((moduleData, index) => (
          <ForcastDxC
            key={index}
            moduleName={moduleData.moduleName}
            status={moduleData.status}
            chamadosForecasts={moduleData.forecasts.chamados}
            capacidadeForecasts={moduleData.forecasts.capacidade}
          />
        ))}
      </div>
    </DashSection>
  );
};

export default AreaForcasts;
