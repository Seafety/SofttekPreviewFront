import React from "react";
import styles from "./index.module.scss";
import OpenTickets from "../../../Components/Organisms/OpenTickets";
import CriticidadeBar from "../../../Components/Molecules/CriticidadeBar";
import ComplexChart from "../../../Components/Organisms/ComplexChart";
import ConclusionChart from "../../../Components/Organisms/ConclusionChart";
import ChamadosConsultor from "../../../Components/Organisms/ChamadosConsultorSection";
import ConsultoresDisponiveis from "../../../Components/Organisms/ConsultoresDisponiveisSection";

const Data = () => {
  return (
    <>
      <section className={styles.container}>
        <ConsultoresDisponiveis />
        <OpenTickets />
        <ChamadosConsultor />
        <ConclusionChart />
        <CriticidadeBar />
        <ComplexChart />
      </section>
    </>
  );
};

export default Data;
