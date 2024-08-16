import React from "react";
import DashSection from "../../../Components/Templates/DashSectionTemplate";
import TableForecast from "../../../Components/Organisms/TableForecast";
import styles from "../../../Components/Templates/ForecastTemplate/index.module.scss"
import { chartOptions, custoOptions, Bar } from "../../../Components/Organisms/ChartOptions"

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

      
    </>
  );
};

export default Forecast;
