import React from "react";
import Table from "../../Molecules/Table";
import DashSection from "../../Templates/DashSectionTemplate";
import Status from "../../Atoms/Status";
const ChamadosConsultor = () => {
  const table2Headers = [
    "Tickets",
    "Nome",
    "Módulo",
    "Senioridade",
    "Situação",
  ];
  const table2Data = [
    ["175", "Ithalo Santos", "Infra +", "Estagiário", "critico"],
    ["97", "Michel Santos", "Infra", "Junior", "critico"],
    ["50", "João Silva", "Compras +", "Pleno", "anormal"],
    ["49", "Marcio  Bolots", "Financeiro +", "Senior", "anormal"],
    ["...", "...", "...", "...", "..."],
    ["1", "Jocelyn Gion", "Vendas", "Senior", "normal"],
  ];

  const formattedTable2Data = table2Data.map((row) => [
    row[0],
    row[1],
    row[2],
    row[3],

    <Status status={row[4]} />,
  ]);
  return (
    <DashSection title="Chamados por Colaborador">
      <Table headers={table2Headers} data={formattedTable2Data} />
    </DashSection>
  );
};

export default ChamadosConsultor;
