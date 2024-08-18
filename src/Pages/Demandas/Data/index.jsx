import React from "react";
import OpenTickets from "../../../Components/Organisms/OpenTickets";
import CriticidadeBar from "../../../Components/Molecules/CriticidadeBar";
import ComplexChart from "../../../Components/Organisms/ComplexChart";
import ConclusionChart from "../../../Components/Organisms/ConclusionChart";
import ChamadosConsultor from "../../../Components/Organisms/ChamadosConsultorSection";

const Data = () => {
  return (
    <>
      <OpenTickets />
      <ChamadosConsultor />
      <ConclusionChart />
      <CriticidadeBar />
      <ComplexChart />
    </>
  );
};

export default Data;
