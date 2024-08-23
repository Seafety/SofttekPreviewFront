import React from 'react';

const ContractSummary = ({ contract }) => {
    const totalCost = Object.keys(contract.custo_venda).reduce(
        (sum, key) => sum + (contract.custo_venda[key] * (contract.piramide_vendas[key] / 100) * contract.baseline_consumido), 
        0
    );

    return (
        <div className="contract-summary">
            <h3>Custo do Contrato</h3>
            <p>Total: R${totalCost.toFixed(2)}</p>
        </div>
    );
};

export default ContractSummary;
