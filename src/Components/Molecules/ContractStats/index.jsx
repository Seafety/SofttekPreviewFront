import React from 'react';

const ContractStats = ({ contract }) => {
    const totalHours = Object.values(contract.piramide_vendas).reduce((a, b) => a + b, 0);
    const utilization = (contract.baseline_consumido / contract.baseline) * 100;

    return (
        <div className="contract-stats">
            <h3>Utilização por Nível</h3>
            <ul>
                {Object.keys(contract.piramide_vendas).map(level => (
                    <li key={level}>
                        {level}: {contract.piramide_vendas[level]}%
                    </li>
                ))}
            </ul>
            <h3>Horas Utilizadas: {contract.baseline_consumido} / {contract.baseline}</h3>
            <h3>Utilização: {utilization.toFixed(2)}%</h3>
        </div>
    );
};

export default ContractStats;
