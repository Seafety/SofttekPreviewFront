import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import styles from "./index.module.scss";
import InfoBoxView from "../../Atoms/InfoBoxView";

const ContractsSection = () => {
  const contractData = [
    { type: "Desvio de Escopo", value: "Em Análise" },
    { type: "Desvio de SLA", value: "Alto" },
    { type: "Desvio Orçamentário", value: "Médio" },
    { type: "Baixo NPS", value: "Baixo" },
  ];

  const infoBoxe = (
    <InfoBoxView
      title="Total de Contratos"
      color="#0d296e"
      info={`325`}
      type="money"
    />
  );

  return (
    <DashSection title="Análise de Contratos" title_infobox={infoBoxe}>
      <table className={styles.contractTable}>
        <thead>
          <tr>
            <th>Tipo de Desvio</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {contractData.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashSection>
  );
};

export default ContractsSection;
