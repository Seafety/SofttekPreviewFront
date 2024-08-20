// RevenueCostChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PropTypes from "prop-types";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueCostChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Custo",
        data: data.cost,
        borderColor: "#F00",
        backgroundColor: "#F00",
      },
      {
        label: "Faturamento",
        data: data.revenue,
        borderColor: "#01E340",
        backgroundColor: "#01E347",
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
  };

  return <Line data={chartData} options={options} />;
};

RevenueCostChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.array.isRequired,
    revenue: PropTypes.array.isRequired,
    cost: PropTypes.array.isRequired,
  }),
};

export default RevenueCostChart;
