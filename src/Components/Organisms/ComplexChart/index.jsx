import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DashSection from "../../Templates/DashSectionTemplate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComplexChart = () => {
  const data = { name: "Complexidade", N1: 623, N2: 230, N3: 351 };

  const chartData = {
    labels: [data.name],
    datasets: [
      {
        label: "N1",
        data: [data.N1],
        borderColor: "#B3E8EF",
        backgroundColor: "#B3E8EF",
        borderRadius: 10,
        fill: true,
      },
      {
        label: "N2",
        data: [data.N2],
        borderColor: "#D2CCF7",
        backgroundColor: "#D2CCF7",
        borderRadius: 10,
        fill: true,
      },
      {
        label: "N3",
        data: [data.N3],
        borderColor: "#F6CDCD",
        backgroundColor: "#F6CDCD",
        borderRadius: 10,
        fill: true,
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
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
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
    <DashSection title="Tickets por complexidade">
      <Bar data={chartData} options={options} />
    </DashSection>
  );
};

export default ComplexChart;
