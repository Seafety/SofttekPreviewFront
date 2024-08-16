import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

const chartOptions = {
  scales: {
    x: { stacked: true },
    y: { stacked: true },
    "y-axis-2": { type: "linear", position: "right" }
  }
};

const custoOptions = {
  scales: {
    x: {
      title: {
        display: true,
      },
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 45,
      },
    },
    y: {
      title: {
        display: true,
      },
      ticks: {
        callback: function(value) {
          return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 3 })}`;
        }
      }
    },
    "y-axis-2": {
      type: "linear",
      position: "right",
      title: {
        display: true,
        text: 'Projeção (R$)',
      },
      ticks: {
        callback: function(value) {
          return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 3 })}`;
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        generateLabels: function(chart) {
          const original = ChartJS.defaults.plugins.legend.labels.generateLabels;
          const labels = original.call(this, chart);

          labels.forEach(label => {
            label.pointStyle = 'circle';
            label.radius = 10;
          });

          return labels;
        }
      }
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItem) {
          return `R$ ${tooltipItem.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        }
      }
    }
  }
};

export { chartOptions, custoOptions, Bar };
