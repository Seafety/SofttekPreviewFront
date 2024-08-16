import React from "react";
import DashSection from "../../../Components/Templates/DashSectionTemplate";
import TableForecast from "../../../Components/Organisms/TableForecast";
import styles from "../../../Components/Templates/ForecastTemplate/index.module.scss"
import { chartOptions, custoOptions, Bar } from "../../../Components/Organisms/ChartOptions"
import ResourceUtilization from "../../../Components/Organisms/ResourceUtilization/index.jsx";
import Calendar from "../../../Components/Organisms/Calendar";

const Forecast= () => {
  const data = {
    labels: ["FI", "FSCM", "CO", "MM", "SD", "LE", "PP", "QM", "PM", "PS", "HCM", "SRM", "AM", "BW", "WM", "ABAP"],
    datasets: [
      {
        label: "Jan",
        data: [18, 9, 12, 15, 18, 7.5, 10.5, 7.5, 9, 6, 12, 6, 6, 4.5, 6, 3],
        backgroundColor: "#6349FF",
        borderRadius: 5, 
        barThickness: 10, 
        order: 2,
      },
      {
        label: "Fev",
        data: [21.84, 10.92, 14.56, 18.2, 21.84, 9.1, 12.74, 9.1, 10.92, 7.28, 14.56, 7.28, 7.28, 5.46, 7.28, 3.64],
        backgroundColor: "#B8ACFF",
        borderRadius: 5, 
        barThickness: 10, 
        order: 3,
      },
      {
        label: "Mar",
        data: [24, 12, 16, 20, 24, 10, 14, 10, 12, 8, 16, 8, 8, 6, 8, 4],
        backgroundColor: "#D8D1FF",
        borderRadius: 2.5, 
        barThickness: 10, 
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

   
  
    const custoData = {
      labels: ["FI", "FSCM", "CO", "MM", "SD", "LE", "PP", "QM", "PM", "PS", "HCM", "SRM", "AM", "BW", "WM", "ABAP"],
      datasets: [
        {
          label: "Último trimestre",
          data: [ 21.117,	 11.252, 14.065, 16.878, 21.098,	10.383,	11.252,	7.033,	9.846,	7.033,	11.252,	7.033,	4.220,	4.220,	7.033,	8.439
          ],
          backgroundColor: "#6349FF",
          borderRadius: 2.5, 
          barThickness: 10, 
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
    
  const criticidadeData1 = [
    { icon: 'up', name: 'High', lastQuarter: '106', futureProjection: '2.5%', status: 'up2' },
    { icon: 'neutral', name: 'Medium', lastQuarter: '212', futureProjection: '5%', status: 'up2' },
    { icon: 'down', name: 'Low', lastQuarter: '106', futureProjection: '7.5%', status: 'up2' },

  ];


  const consultoresData1 = [
    { icon: 'expert', name: 'Expert', lastQuarter: '53', futureProjection: '2.5%', status: 'up2' },
    { icon: 'senior', name: 'Senior', lastQuarter: '106', futureProjection: '5%', status: 'up2' },
    { icon: 'pleno', name: 'Pleno', lastQuarter: '159', futureProjection: '7.5%', status: 'up2' },
    { icon: 'junior', name: 'Júnior', lastQuarter: '133', futureProjection: '6.25%', status: 'up2' },
    { icon: 'estagiario', name: 'Estagiário', lastQuarter: '79', futureProjection: '3.75%', status: 'up2' },
  ];

  const resources = [
    { name: 'Expert', role: 'expert', occupied: 80 },
    { name: 'Senior', role: 'senior', occupied: 60 },
    { name: 'Pleno', role: 'pleno', occupied: 75 },
    { name: 'Júnior', role: 'junior', occupied: 50 },
    { name: 'Estagiário', role: 'estagiario', occupied: 40 }
  ];
  
  const monthData = [
    [
      { date: 1, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 2, status: 'unavailable', role: 'estagiario', tooltip: 'Consultor estagiário indisponível' },
      { date: 3, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 4, status: 'unavailable', role: 'junior', tooltip: 'Consultor júnior indisponível' },
      { date: 5, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 6, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' },
      { date: 7, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' }
    ],
    [
      { date: 8, status: 'unavailable', role: 'expert', tooltip: 'Consultor expert indisponível' },
      { date: 9, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 10, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 11, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 12, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 13, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 14, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' }
    ],
    [
      { date: 15, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 16, status: 'unavailable', role: 'senior', tooltip: 'Consultor sênior indisponível' },
      { date: 17, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 18, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 19, status: 'available', role: '', tooltip: 'Consultor expert disponível' },
      { date: 20, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 21, status: 'unavailable', role: '', tooltip: 'Consultor estagiário indisponível' }
    ],
    [
      { date: 22, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 23, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 24, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 25, status: 'available', role: '', tooltip: 'Consultor sênior disponível' },
      { date: 26, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 27, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 28, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' }
    ],
    [
      { date: 29, status: 'available', role: 't', tooltip: 'Consultor expert disponível' },
      { date: 30, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' },
      { date: 31, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' }
    ]
  ];
  
  const month2Data = [
    [
      { date: 1, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 2, status: 'unavailable', role: 'estagiario', tooltip: 'Consultor estagiário indisponível' },
      { date: 3, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 4, status: 'unavailable', role: 'junior', tooltip: 'Consultor júnior indisponível' },
      { date: 5, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 6, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' },
      { date: 7, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' }
    ],
    [
      { date: 8, status: 'unavailable', role: 'expert', tooltip: 'Consultor expert indisponível' },
      { date: 9, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 10, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 11, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 12, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 13, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 14, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' }
    ],
    [
      { date: 15, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 16, status: 'unavailable', role: 'senior', tooltip: 'Consultor sênior indisponível' },
      { date: 17, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 18, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 19, status: 'available', role: '', tooltip: 'Consultor expert disponível' },
      { date: 20, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 21, status: 'unavailable', role: '', tooltip: 'Consultor estagiário indisponível' }
    ],
    [
      { date: 22, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 23, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 24, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 25, status: 'available', role: '', tooltip: 'Consultor sênior disponível' },
      { date: 26, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 27, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 28, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' }
    ],
    [
      { date: 29, status: 'available', role: 't', tooltip: 'Consultor expert disponível' },
      { date: 30, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' },
      { date: 31, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' }
    ]
  ];
  
  const month3Data = [
    [
      { date: 1, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 2, status: 'unavailable', role: 'estagiario', tooltip: 'Consultor estagiário indisponível' },
      { date: 3, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 4, status: 'unavailable', role: 'junior', tooltip: 'Consultor júnior indisponível' },
      { date: 5, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 6, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' },
      { date: 7, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' }
    ],
    [
      { date: 8, status: 'unavailable', role: 'expert', tooltip: 'Consultor expert indisponível' },
      { date: 9, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 10, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 11, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 12, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 13, status: 'available', role: '', tooltip: 'Consultor pleno disponível' },
      { date: 14, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' }
    ],
    [
      { date: 15, status: 'available', role: '', tooltip: 'Consultor júnior disponível' },
      { date: 16, status: 'unavailable', role: 'senior', tooltip: 'Consultor sênior indisponível' },
      { date: 17, status: 'available', role: 'senior', tooltip: 'Consultor sênior disponível' },
      { date: 18, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 19, status: 'available', role: '', tooltip: 'Consultor expert disponível' },
      { date: 20, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 21, status: 'unavailable', role: '', tooltip: 'Consultor estagiário indisponível' }
    ],
    [
      { date: 22, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' },
      { date: 23, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 24, status: 'unavailable', role: '', tooltip: 'Consultor pleno indisponível' },
      { date: 25, status: 'available', role: '', tooltip: 'Consultor sênior disponível' },
      { date: 26, status: 'available', role: 'expert', tooltip: 'Consultor expert disponível' },
      { date: 27, status: 'unavailable', role: '', tooltip: 'Consultor júnior indisponível' },
      { date: 28, status: 'available', role: 'pleno', tooltip: 'Consultor pleno disponível' }
    ],
    [
      { date: 29, status: 'available', role: 't', tooltip: 'Consultor expert disponível' },
      { date: 30, status: 'unavailable', role: '', tooltip: 'Consultor sênior indisponível' },
      { date: 31, status: 'available', role: 'estagiario', tooltip: 'Consultor estagiário disponível' }
    ]
  ];
  

  return (
    <>
      
      <div className={styles.dashSectionSmall}>
        <DashSection title="Chamados">
        <Bar data={data} options={chartOptions} />
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Custos por módulo">
        <Bar data={custoData} options={custoOptions} />
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Criticidade">
          <TableForecast data={criticidadeData1}/>
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Consultores">
          <TableForecast data={consultoresData1}  />
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Utilização de recursos">
          <ResourceUtilization resources={resources}/>
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Calendario">
          <Calendar monthData={monthData}/>
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Calendario">
          <Calendar monthData={month2Data}/>
        </DashSection>
      </div>

      <div className={styles.dashSectionSmall}>
        <DashSection title="Calendario">
          <Calendar monthData={month3Data}/>
        </DashSection>
      </div>


      
    </>
  );
};

export default Forecast;
