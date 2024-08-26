import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './index.module.scss'; 
import DashSection from '../../Templates/DashSectionTemplate';

const ContractStats = ({ contract }) => {
    const utilization = (contract.baseline_consumido / contract.baseline) * 100;
    
    const data = {
        labels: Object.keys(contract.piramide_vendas),
        datasets: [
            {
                data: Object.values(contract.piramide_vendas),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }
        ]
    };

    const cargos = [
        { name: 'Gestão', valorHora: contract.custo_venda.gestao, horasExecutadas: contract.horas_gestao, custoTotal: contract.horas_gestao * contract.custo_venda.gestao },
        { name: 'Expert', valorHora: contract.custo_venda.expert, horasExecutadas: 20, custoTotal: 20 * contract.custo_venda.expert },
        { name: 'Sênior', valorHora: contract.custo_venda.senior, horasExecutadas: 25, custoTotal: 25 * contract.custo_venda.senior },
        { name: 'Pleno', valorHora: contract.custo_venda.pleno, horasExecutadas: 30, custoTotal: 30 * contract.custo_venda.pleno },
        { name: 'Junior', valorHora: contract.custo_venda.junior, horasExecutadas: 40, custoTotal: 40 * contract.custo_venda.junior },
        { name: 'Estagiário', valorHora: contract.custo_venda.estagiario, horasExecutadas: 15, custoTotal: 15 * contract.custo_venda.estagiario }
    ];

    return (
        <DashSection title="Custos do Contrato">
        <div className={styles.contractStats}>
            <table className={styles.contractTable}>
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Valor Hora (R$)</th>
                        <th>Horas Executadas</th>
                        <th>Custo Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {cargos.map((cargo, index) => (
                        <tr key={index}>
                            <td>{cargo.name}</td>
                            <td>{cargo.valorHora.toFixed(2)}</td>
                            <td>{cargo.horasExecutadas}h</td>
                            <td>{cargo.custoTotal.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr style={{fontWeight: "600"}}>
                        <td colSpan="2"><strong>Total</strong></td>
                        <td><strong>{cargos.reduce((acc, cargo) => acc + cargo.horasExecutadas, 0)}h</strong></td>
                        <td><strong>R${cargos.reduce((acc, cargo) => acc + cargo.custoTotal, 0).toFixed(2)}</strong></td>
                    </tr>
                </tfoot>
            </table>

            <div className={styles.circularProgressContainer}>
                <div className={styles.progressItems}>
                <div className={styles.progressItem}>
                    <CircularProgress variant="determinate" value={utilization} color="success" />
                    <p>Horas Utilizadas</p>
                    <span>{utilization.toFixed(2)}%</span>
                </div>
                <div className={styles.progressItem}>
                    <CircularProgress variant="determinate" value={utilization} color="error" />
                    <p>Custo Máximo</p>
                    <span>{utilization.toFixed(2)}%</span>
                </div></div>
            </div>

            <div className={styles.doughnutChartContainer}>
                <Doughnut data={data} />
                <p>Utilização por Nível</p>
            </div>
        </div></DashSection>
    );
};

export default ContractStats;
