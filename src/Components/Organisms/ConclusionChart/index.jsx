import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
} from "chart.js";
import DashSection from "../../Templates/DashSectionTemplate";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  CategoryScale
);

const ConclusionChart = () => {
  const data = {
    labels: [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ",
    ],
    datasets: [
      {
        label: "Taxa de Conclusão",
        data: [70, 80, 75, 85, 78, 82, 62, 73, 76, 89, 85, 95],
        fill: true,
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        borderColor: "green",
        tension: 0.4,
        pointBackgroundColor: "green",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "green",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <DashSection title="Taxa de conclusão dos chamados">
      <Line data={data} options={options} />
    </DashSection>
  );
};

export default ConclusionChart;
