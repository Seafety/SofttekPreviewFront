import React from "react";
import Table from "../../Molecules/Table";
import DashSection from "../../Templates/DashSectionTemplate";

const ConsultoresDisponiveis = () => {
  const table1Headers = ["ID", "Nome", "Módulo", "Senioridade"];
  const table1Data = [
    ["DFLD", "Daniel Ferreira", "Qualidade", "Senior"],
    ["NSRL", "Catarina Cardoso", "Qualidade", "Senior"],
    ["LROS", "Louise Vina", "Vendas", "Pleno"],
    ["KDIE", "Maisa Dantas", "Compras", "Junior"],
  ];
  return (
    <DashSection title="Consultores disponíveis">
      <Table headers={table1Headers} data={table1Data} />
    </DashSection>
  );
};

export default ConsultoresDisponiveis;
