import React from "react";
import styles from "./index.module.scss";
import FinanceSection from "../../../Components/Organisms/FinanceSection";
import ContractsSection from "../../../Components/Organisms/ContractsSection";
import StatusArea from "../../../Components/Organisms/StatusArea";
import OpenTickets from "../../../Components/Organisms/OpenTickets";
import CriticidadeBar from "../../../Components/Molecules/CriticidadeBar";
import ComplexChart from "../../../Components/Organisms/ComplexChart";
import ConclusionChart from "../../../Components/Organisms/ConclusionChart";
import ChamadosConsultor from "../../../Components/Organisms/ChamadosConsultorSection";
import ConsultoresDisponiveis from "../../../Components/Organisms/ConsultoresDisponiveisSection";

const RealTime = () => {
  return (
    <section className={styles.container}>
      <StatusArea />
      <FinanceSection />
      <ContractsSection />
      <ConsultoresDisponiveis />
      <OpenTickets />
      <ChamadosConsultor />
      <ConclusionChart />
      <CriticidadeBar />
      <ComplexChart />
    </section>
  );
};

export default RealTime;
