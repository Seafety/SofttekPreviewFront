import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import Table from "../../Molecules/Table";
import consultores from "../../../json/equipe.json";

const ConsultorAusenciaForcast = () => {
  const table1Headers = ["ID", "Nome", "Módulos", "Saída", "Volta"];

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const table1Data = consultores.equipe
    .filter((consultor) => consultor.ausencia_ini && consultor.ausencia_fin)
    .map((consultor) => [
      consultor.is,
      consultor.nome,
      consultor.especialidade.join(", "),
      formatDate(consultor.ausencia_ini),
      formatDate(consultor.ausencia_fin),
    ]);

  return (
    <DashSection title="Consultores ausentes nos próximos meses">
      <Table headers={table1Headers} data={table1Data} />
    </DashSection>
  );
};

export default ConsultorAusenciaForcast;
