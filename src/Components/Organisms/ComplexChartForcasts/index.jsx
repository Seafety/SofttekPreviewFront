import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DashSection from "../../Templates/DashSectionTemplate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ComplexityChartForcasts = () => {
  // Dados fictícios para o exemplo
  const forecastData = [
    {
      month: "Outubro",
      N1: 500,
      N2: 200,
      N3: 300,
    },
    {
      month: "Novembro",
      N1: 550,
      N2: 220,
      N3: 320,
    },
    {
      month: "Dezembro",
      N1: 600,
      N2: 240,
      N3: 350,
    },
  ];

  const chartData = {
    labels: forecastData.map((data) => data.month),
    datasets: [
      {
        type: "bar",
        label: "N1",
        data: forecastData.map((data) => data.N1),
        borderColor: "#B3E8EF",
        backgroundColor: "#B3E8EF",
        borderRadius: 10,
        fill: true,
      },
      {
        type: "bar",
        label: "N2",
        data: forecastData.map((data) => data.N2),
        borderColor: "#D2CCF7",
        backgroundColor: "#D2CCF7",
        borderRadius: 10,
        fill: true,
      },
      {
        type: "bar",
        label: "N3",
        data: forecastData.map((data) => data.N3),
        borderColor: "#F6CDCD",
        backgroundColor: "#F6CDCD",
        borderRadius: 10,
        fill: true,
      },
      {
        type: "line",
        label: "Tendência",
        data: forecastData.map((data) => (data.N1 + data.N2 + data.N3) / 2.3),
        borderColor: "#FF6384",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderWidth: 3,
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          borderDash: [3, 3],
        },
      },
    },
  };

  return (
    <DashSection title="Previsão de Complexidade dos Chamados">
      <Bar data={chartData} options={options} />
    </DashSection>
  );
};
export default ComplexityChartForcasts;
