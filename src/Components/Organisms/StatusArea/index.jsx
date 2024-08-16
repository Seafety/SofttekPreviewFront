import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import Area from "../../Molecules/Area";
import styles from "./index.module.scss"; // Certifique-se de que este arquivo SCSS esteja importado

const StatusArea = () => {
  const areasData = [
    {
      nome: "Financeiro",
      status: "CRITICO",
      chamados_abertos: 500,
      chamados_iniciado: 120,
      avaliation: 2.0,
      tempo_medio: 15,
      capacidade: 95, // Capacidade próxima ao limite, indicando alta pressão na área
    },
    {
      nome: "Controlling",
      status: "ANORMAL",
      chamados_abertos: 300,
      chamados_iniciado: 80,
      avaliation: 3.2,
      tempo_medio: 8,
      capacidade: 70, // Capacidade intermediária, mas com sinais de sobrecarga
    },
    {
      nome: "Vendas e Distribuição",
      status: "CRITICO",
      chamados_abertos: 450,
      chamados_iniciado: 200,
      avaliation: 1.8,
      tempo_medio: 12,
      capacidade: 90, // Capacidade muito alta, sobrecarga e pressão extrema
    },
    {
      nome: "Gestão de Materiais",
      status: "NORMAL",
      chamados_abertos: 150,
      chamados_iniciado: 50,
      avaliation: 4.6,
      tempo_medio: 3,
      capacidade: 60, // Capacidade controlada, sem sinais de sobrecarga
    },
    {
      nome: "Planejamento de Produção",
      status: "ANORMAL",
      chamados_abertos: 280,
      chamados_iniciado: 130,
      avaliation: 3.0,
      tempo_medio: 9,
      capacidade: 75, // Capacidade próxima do limite, com necessidade de atenção
    },
    {
      nome: "Gestão da Qualidade",
      status: "NORMAL",
      chamados_abertos: 100,
      chamados_iniciado: 40,
      avaliation: 4.8,
      tempo_medio: 2,
      capacidade: 50, // Capacidade bem gerida, sem preocupações
    },
    {
      nome: "Recursos Humanos",
      status: "CRITICO",
      chamados_abertos: 550,
      chamados_iniciado: 250,
      avaliation: 2.1,
      tempo_medio: 14,
      capacidade: 95, // Alta carga de trabalho e baixa avaliação
    },
    {
      nome: "Manutenção de Planta",
      status: "NORMAL",
      chamados_abertos: 120,
      chamados_iniciado: 60,
      avaliation: 4.5,
      tempo_medio: 3,
      capacidade: 65, // Área funcionando dentro dos parâmetros normais
    },
    {
      nome: "Sistema de Projeto",
      status: "ANORMAL",
      chamados_abertos: 320,
      chamados_iniciado: 160,
      avaliation: 3.4,
      tempo_medio: 10,
      capacidade: 80, // Exigindo monitoramento, mas não em estado crítico
    },
    {
      nome: "Gestão de Armazém",
      status: "NORMAL",
      chamados_abertos: 90,
      chamados_iniciado: 35,
      avaliation: 4.3,
      tempo_medio: 2,
      capacidade: 55, // Área com boa capacidade e desempenho
    },
    {
      nome: "Serviço ao Cliente",
      status: "ANORMAL",
      chamados_abertos: 400,
      chamados_iniciado: 180,
      avaliation: 3.1,
      tempo_medio: 7,
      capacidade: 85, // Capacidade em alta, necessitando de ajustes
    },
    {
      nome: "Gestão de Relacionamento com Fornecedores",
      status: "NORMAL",
      chamados_abertos: 110,
      chamados_iniciado: 45,
      avaliation: 4.4,
      tempo_medio: 3,
      capacidade: 70, // Área operando normalmente
    },
    {
      nome: "Inteligência de Negócios",
      status: "CRITICO",
      chamados_abertos: 600,
      chamados_iniciado: 300,
      avaliation: 1.9,
      tempo_medio: 16,
      capacidade: 100, // Sobrecarga extrema, desempenho muito baixo
    },
    {
      nome: "Programação Avançada de Aplicativos de Negócios",
      status: "NORMAL",
      chamados_abertos: 150,
      chamados_iniciado: 50,
      avaliation: 4.7,
      tempo_medio: 3,
      capacidade: 60, // Boa capacidade e desempenho
    },
    {
      nome: "Integração de Processos",
      status: "CRITICO",
      chamados_abertos: 520,
      chamados_iniciado: 240,
      avaliation: 2.2,
      tempo_medio: 12,
      capacidade: 95, // Alta pressão e necessidade de melhorias
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
