import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import Table from "../../Molecules/Table";
import consultores from "../../../json/equipe.json";
import chamadosData from "../../../json/chamados.json";

const ConsultorFeriasSugestao = () => {
  const tableHeaders = [
    "ID",
    "Nome",
    "Módulos",
    "Horas Trabalhadas",
    "Sugestão de Férias",
  ];

  // Verificar se chamadosData.demands é um array
  const chamados = Array.isArray(chamadosData.demands)
    ? chamadosData.demands
    : [];

  // Função para calcular as horas trabalhadas por consultor
  const calcularHorasTrabalhadas = (consultorId) => {
    return chamados
      .filter((chamado) => chamado.is === consultorId)
      .reduce((total, chamado) => total + chamado.horas, 0);
  };

  // Função para sugerir férias
  const sugerirFerias = (consultor) => {
    const horasTrabalhadas = calcularHorasTrabalhadas(consultor.is);
    // Sugestão: Consultores com menos horas trabalhadas são candidatos a férias
    return horasTrabalhadas < 100; // Exemplo: Consultores com menos de 100 horas
  };

  const tableData = consultores.equipe
    .filter((consultor) => !consultor.ausencia_ini && !consultor.ausencia_fin)
    .map((consultor) => [
      consultor.is,
      consultor.nome,
      consultor.especialidade.join(", "),
      calcularHorasTrabalhadas(consultor.is),
      sugerirFerias(consultor) ? "Sim" : "Não",
    ])
    .slice(0, 7); // Limitar a 7 consultores

  return (
    <DashSection title="Sugestão de Férias">
      <Table headers={tableHeaders} data={tableData} />
    </DashSection>
  );
};

export default ConsultorFeriasSugestao;
