import React from "react";
import DashSection from "../../../Components/Templates/DashSectionTemplate";
import Table from "../../../Components/Organisms/Table";
import Status from "../../../Components/Atoms/Status";
import styles from "../../../Components/Templates/DemandasTemplate/index.module.scss"
import OpenTickets from "../../../Components/Organisms/OpenTickets";
import CriticidadeBar from "../../../Components/Molecules/CriticidadeBar";
import ComplexChart from "../../../Components/Organisms/ComplexChart";
import ConclusionChart from "../../../Components/Organisms/ConclusionChart";
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


const Forecast= () => {
  const data = {
    labels: ["FI", "FSCM", "CO", "MM", "SD", "LE", "PP", "QM", "PM", "PS", "HCM", "SRM", "AM", "BW", "WM", "ABAP"],
    datasets: [
      {
        label: "Jan",
        data: [18, 9, 12, 15, 18, 7.5, 10.5, 7.5, 9, 6, 12, 6, 6, 4.5, 6, 3],
        backgroundColor: "#6349FF",
        borderRadius: 5, // Arredondamento das bordas
        barThickness: 10, // Define a grossura das barras
        order: 2,
      },
      {
        label: "Fev",
        data: [21.84, 10.92, 14.56, 18.2, 21.84, 9.1, 12.74, 9.1, 10.92, 7.28, 14.56, 7.28, 7.28, 5.46, 7.28, 3.64],
        backgroundColor: "#B8ACFF",
        borderRadius: 5, // Arredondamento das bordas
        barThickness: 10, // Define a grossura das barras
        order: 3,
      },
      {
        label: "Mar",
        data: [24, 12, 16, 20, 24, 10, 14, 10, 12, 8, 16, 8, 8, 6, 8, 4],
        backgroundColor: "#D8D1FF",
        borderRadius: 2.5, // Arredondamento das bordas
        barThickness: 10, // Define a grossura das barras
        order: 4,
      },
      {
        label: "Projeção Futura",
        data: [56.89, 28.44, 37.93, 47.41, 56.89, 23.7, 33.19, 23.7, 28.44, 18.96, 37.93, 18.96, 18.96, 14.22, 18.96, 9.48],
        type: "line",
        borderColor: "#52A1E9",
        yAxisID: "y-axis-2",
        order: 1,
      },
    ],
  }

    const options = {
      scales: {
        x: { stacked: true },
        y: { stacked: true },
        "y-axis-2": { type: "linear", position: "right" }
      }
    };
  
    const custoData = {
      labels: ["FI", "FSCM", "CO", "MM", "SD", "LE", "PP", "QM", "PM", "PS", "HCM", "SRM", "AM", "BW", "WM", "ABAP"],
      datasets: [
        {
          label: "Último trimestre",
          data: [ 21.117,	 11.252, 14.065, 16.878, 21.098,	10.383,	11.252,	7.033,	9.846,	7.033,	11.252,	7.033,	4.220,	4.220,	7.033,	8.439
          ],
          backgroundColor: "#6349FF",
          borderRadius: 2.5, // Arredondamento das bordas
          barThickness: 10, // Define a grossura das barras
          order: 2,
        },
        {
          label: "Projeção futura",
          data: [24.285,	12.940,	16.175,	19.410,	24.262,	11.940,	12.940,	8.087,	11.322,	8.087,	12.940,	8.087,	4.852,	4.852,	8.087,	9.705 
          ],
          type: "line",
          borderColor: "#52A1E9",
          yAxisID: "y-axis-2",
          order: 1,
        },
      ],
    }
    const custoOptions = {
      scales: {
        x: {
          title: {
            display: true,
          },
          ticks: {
            autoSkip: false, // Evita que alguns labels sejam pulados
            maxRotation: 90, // Define a rotação máxima dos labels
            minRotation: 45, // Define a rotação mínima dos labels
          },
        },
        y: {
          title: {
            display: true,
            
          },
          ticks: {
            callback: function(value) {
              // Formata o valor do eixo Y para incluir "R$"
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
              // Formata o valor do eixo Y para incluir "R$" na projeção
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
                // Personalizar o ponto da legenda
                label.pointStyle = 'circle'; // Define o ponto como círculo
                label.radius = 10; // Define o tamanho do círculo
              });
    
              return labels;
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              // Formata o valor do tooltip para incluir "R$"
              return `R$ ${tooltipItem.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            }
          }
        }
      }
    };
    
  const criticidadeHeader = ['Criticidade', 'Ultimo trimestre', 'Projeção futura', '']
  const criticidadeData = [
    [ 'up', '106', '5%', ''],
    ['neutral', '222', '10%', ''] ,
    ['down',  '105', '2.5%', ''],
  ];

  const consultoresHeader = ['Consultores', 'Ultimo trimestre', 'Projeção futura', '']
  const consultoresData = [
    [ 'Expert', '53', '2.5%',''],
    ['Senior', '106', '5%',''] ,
    ['Pleno',  '159', '7.5%',''],
    ['Júnior', '133', '6.25%',''] ,
    ['Estagiário',  '79', '3.75%',''],
  ];

  // const table1Headers = ['Criticidade', 'Ultimo trimestre', 'Projeção futura'];
  // const table1Data = [
  //   ['critico', 'Daniel Ferreira', 'Qualidade'],
  //   ['NSRL', 'Catarina Cardoso', 'Qualidade'],
  //   ['LROS', 'Louise Vina', 'Vendas'],
  //   ['KDIE', 'Maisa Dantas', 'Compras'],
  // ];

  // const table2Headers = ['Tickets', 'Nome', 'Módulo', 'Senioridade', 'Situação'];
  // const table2Data = [
  //   ['175', 'Ithalo Santos', 'Infra +', 'Estagiário', 'critico'],
  //   ['97', 'Michel Santos', 'Infra', 'Junior', 'critico'],
  //   ['50', 'João Silva', 'Compras +', 'Pleno', 'anormal'],
  //   ['49', 'Marcio  Bolots', 'Financeiro +', 'Senior', 'anormal'],
  //   ['...', '...', '...', '...', '...'],
  //   ['1', 'Jocelyn Gion', 'Vendas', 'Senior', 'normal'],
  // ];

  // const formattedTable2Data = table2Data.map  (row => [
  //   row[0],
  //   row[1],
  //   row[2],
  //   row[3],
  //   <Status status={row[4]} /> 
  // ]);



  // const chamados = [
  //   {
  //     dateTime: '24/08/2024 09:48:02',
  //     level: 'N3',
  //     project: 'Projeto_01',
  //     task: 'TASK105597715-1',
  //     department: 'Vendas',
  //     hours: '2,8',
  //     status: 'up',
  //   },
  //   {
  //     dateTime: '22/08/2024 15:28:12',
  //     level: 'N2',
  //     project: 'Projeto_01',
  //     task: 'TASK105721218-1',
  //     department: 'Compras',
  //     hours: '0,5',
  //     status: 'up',
  //   },
  //   {
  //     dateTime: '22/08/2024 16:12:08',
  //     level: 'N1',
  //     project: 'Projeto_01',
  //     task: 'TASK10572364-1',
  //     department: 'Infra',
  //     hours: '1,6',
  //     status: 'neutral',
  //   },
  //   {
  //     dateTime: '24/08/2024 09:48:02',
  //     level: 'N1',
  //     project: 'Projeto_01',
  //     task: 'TASK105595614-2',
  //     department: 'Qualidade',
  //     hours: '0,7',
  //     status: 'down',
  //   },
  //   {
  //     dateTime: '22/08/2024 16:12:08',
  //     level: 'N2',
  //     project: 'Projeto_01',
  //     task: 'TASK10572364-1',
  //     department: 'Infra',
  //     hours: '1,6',
  //     status: 'neutral',
  //   },
  //   {
  //     dateTime: '24/08/2024 09:48:02',
  //     level: 'N3',
  //     project: 'Projeto_01',
  //     task: 'TASK105595614-2',
  //     department: 'Qualidade',
  //     hours: '0,7',
  //     status: 'down',
  //   },
  //   {
  //     dateTime: '24/08/2024 09:48:02',
  //     level: 'N3',
  //     project: 'Projeto_01',
  //     task: 'TASK105597715-1',
  //     department: 'Vendas',
  //     hours: '2,8',
  //     status: 'up',
  //   },
  // ];

  // const criticidade = [
  //   { label: 'Lowest', percentage: 22 , color: '#b3e5fc' },
  //   { label: 'Medium', percentage: 42, color: '#dcedc8' },
  //   { label: 'High', percentage: 36, color: '#ef9a9a' },
  // ];

  return (
    <>
      
      <div className={styles.dashSectionLarge}>
        <DashSection title="Chamados">
        <Bar data={data} options={options} />
        </DashSection>
      </div>

      <div className={styles.dashSectionLarge}>
        <DashSection title="Custos por módulo">
        <Bar data={custoData} options={custoOptions} />
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Criticidade">
          <Table headers={criticidadeHeader} data={criticidadeData} />
        </DashSection>
      </div>

      
      <div className={styles.dashSectionSmall}>
        <DashSection title="Consultores">
          <Table headers={consultoresHeader} data={consultoresData} />
        </DashSection>
      </div>

      {/* <div className={styles.dashSectionSmall}>
      <DashSection title="Consultores disponíveis">
        <Table headers={table1Headers} data={table1Data} />
      </DashSection> 
      </div>

      <div className={styles.dashSectionSmall}> 
      <DashSection title="Chamados abertos">
        <OpenTickets chamados={chamados} />
      </DashSection>
      </div>
      <div className={styles.dashSectionSmall}>
      <DashSection title="Chamados por Colaborador">
        <Table headers={table2Headers} data={formattedTable2Data} />
      </DashSection>
      </div>
      <div className={styles.dashSectionSmall }>
      <DashSection title="Taxa de conclusão dos chamados">
        <ConclusionChart></ConclusionChart>
      </DashSection>
      </div>
      <div className={styles.dashSectionSmall}>
      <DashSection title="Tickets por criticidade">
        <CriticidadeBar criticidade={criticidade} />
      </DashSection>
      </div>
      <div className={styles.dashSectionLarge}>
      <DashSection title="Tickets por complexidade">
        <ComplexChart></ComplexChart>
      </DashSection></div> */}
    </>
  );
};

export default Forecast;
