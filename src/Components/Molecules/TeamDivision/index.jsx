import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './index.module.scss'; 

const TeamDivision = ({ contract }) => {
    const generateRandomData = () => {
        const divisaoEquipe = {
            Financeiro: Math.floor(Math.random() * 10) + 1,
            Vendas: Math.floor(Math.random() * 10) + 1,
            Manutenção: Math.floor(Math.random() * 10) + 1,
            Fiscal: Math.floor(Math.random() * 10) + 1,
            Custo: Math.floor(Math.random() * 10) + 1,
            Produção: Math.floor(Math.random() * 10) + 1,
        };

        const totalDemandas = Object.values(divisaoEquipe).reduce((acc, value) => acc + value, 0);

        return { divisaoEquipe, totalDemandas };
    };

    const [data, setData] = useState(generateRandomData());

    useEffect(() => {
        setData(generateRandomData());
    }, [contract]);

    const doughnutData = {
        labels: Object.keys(data.divisaoEquipe),
        datasets: [
            {
                data: Object.values(data.divisaoEquipe),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }
        ]
    };

    return (
        <div className={styles.teamDivisionContainer}>
            <div className={styles.tableContainer}>
                <h3>Divisão da Equipe</h3>
                <table className={styles.teamTable}>
                    <thead>
                        <tr>
                            <th>Setor</th>
                            <th>Número</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data.divisaoEquipe).map(([setor, numero], index) => (
                            <tr key={index}>
                                <td>{setor}</td>
                                <td><strong>{numero}</strong></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.doughnutChartContainer}>
                <h3>Tipos de Demandas</h3>
                <Doughnut data={doughnutData} />
                <p>Total: <strong>{data.totalDemandas}</strong></p>
            </div>
        </div>
    );
};

export default TeamDivision;
