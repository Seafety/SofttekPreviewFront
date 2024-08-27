import React from 'react';
import styles from './index.module.scss';
import DashSection from '../../Templates/DashSectionTemplate';

const getComplexity = (valor) => {
    if (valor > 600000) return 'Alta';
    if (valor > 300000) return 'Média';
    return 'Baixa';
};

const getTrend = () => {
    const trends = ['Positiva', 'Estável', 'Negativa'];
    return trends[Math.floor(Math.random() * trends.length)];
};

const getRisk = (complexity) => {
    if (complexity === 'Alta') return 'Alto';
    if (complexity === 'Média') return 'Moderado';
    return 'Baixo';
};

const ContractSummary = ({ contract }) => {
    const complexity = getComplexity(contract.valor_contrato);
    const trend = getTrend();
    const risk = getRisk(complexity);

    return (
        <DashSection title={`${contract.projeto} - ${contract.descricao}`}>
            <div className={styles.contractSummaryContainer}>
                <div className={styles.summaryDetails}>
                    <p>
                        <strong>Complexidade:</strong> 
                        <span className={styles[complexity.toLowerCase()]}>
                            {` ${complexity}`}
                        </span>
                    </p>
                    <p>
                        <strong>Tendência:</strong> 
                        <span className={styles[trend.toLowerCase()]}>
                            {` ${trend}`}
                        </span>
                    </p>
                    <p>
                        <strong>Risco:</strong> 
                        <span className={styles[risk.toLowerCase()]}>
                            {` ${risk}`}
                        </span>
                    </p>
                </div>
            </div>
        </DashSection>
    );
};

export default ContractSummary;
