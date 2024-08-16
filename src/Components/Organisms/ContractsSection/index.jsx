import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import styles from "./index.module.scss";
import InfoBoxView from "../../Atoms/InfoBoxView";
import alert_red from "../../../Assets/alert-red.svg";
import alert_orange from "../../../Assets/alert-orange.svg";
import alert_green from "../../../Assets/alert-green.svg";

const ContractsSection = () => {
  const contractData = [
    { type: "Desvio de Escopo", value: 0 },
    { type: "Desvio de SLA", value: 46 },
    { type: "Desvio Orçamentário", value: 12 },
    { type: "Baixo NPS", value: 3 },
  ];

  const infoBoxe = (
    <InfoBoxView
      title="Contratos Ativos"
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
              <td>
                <img
                  src={
                    item.value === 0
                      ? alert_green
                      : item.value < 10
                      ? alert_orange
                      : alert_red
                  }
                  alt="alerta"
                />
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashSection>
  );
};

export default ContractsSection;
