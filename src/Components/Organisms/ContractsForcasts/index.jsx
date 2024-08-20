import React from "react";
import DashSection from "../../Templates/DashSectionTemplate";
import styles from "./index.module.scss";
// import InfoBoxView from "../../Atoms/InfoBoxView";
import alertRed from "../../../Assets/alert-red.svg";
import alertOrange from "../../../Assets/alert-orange.svg";
import alertGreen from "../../../Assets/alert-green.svg";
import contratosData from "../../../json/projetos.json";

const ContractsForecastSection = () => {
  const contractData = contratosData.contratos.map((contrato) => {
    // Simular uma previsão baseada no status atual
    let previsao = "Estável";
    let alertIcon = alertGreen;

    if (contrato.status === "Crítico") {
      previsao = "Risco Alto";
      alertIcon = alertRed;
    } else if (contrato.status === "Anormal") {
      previsao = "Risco Moderado";
      alertIcon = alertOrange;
    } else if (contrato.baseline_consumido >= contrato.baseline * 0.8) {
      previsao = "Atenção Necessária";
      alertIcon = alertOrange;
    }

    return {
      projeto: contrato.projeto,
      descricao: contrato.descricao,
      previsao: previsao,
      alertIcon: alertIcon,
    };
  });

  return (
    <DashSection title="Previsão de Contratos">
      <div className={styles["contractTable-wrapper"]}>
        <table className={styles.contractTable}>
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Descrição</th>
              <th>Previsão</th>
            </tr>
          </thead>
          <tbody>
            {contractData.map((item, index) => (
              <tr key={index}>
                <td>{item.projeto}</td>
                <td>{item.descricao}</td>
                <td>
                  <img src={item.alertIcon} alt="alerta" /> {item.previsao}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashSection>
  );
};

export default ContractsForecastSection;
