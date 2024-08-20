import React from "react";
import { Line } from "react-chartjs-2";
import DashSection from "../../Templates/DashSectionTemplate";

const FinanceForcasts = () => {
  const data = {
    labels: ["Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Receita",
        data: [65000, 63000, 55000],
        borderColor: "#01E340",
        backgroundColor: "#01e22331",
        fill: false,
        tension: 0.3,
      },
      {
        label: "Despesa",
        data: [61000, 64000, 69000],
        borderColor: "#F00",
        backgroundColor: "#F24619",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <DashSection title="Previsão Financeira">
      <Line data={data} options={options} />
    </DashSection>
  );
};

export default FinanceForcasts;
