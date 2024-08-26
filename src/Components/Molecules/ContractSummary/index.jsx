import React from 'react';

const ContractSummary = ({ contract }) => {
    const totalCost = Object.keys(contract.custo_venda || {}).reduce((sum, key) => {
        const custoVenda = contract.custo_venda[key];
        const piramideVenda = contract.piramide_vendas[key];
        const baselineConsumido = contract.baseline_consumido || 0;

        if (typeof custoVenda === 'number' && typeof piramideVenda === 'number') {
            return sum + (custoVenda * (piramideVenda / 100) * baselineConsumido);
        }

        return sum;
    }, 0);

    return (
        <div className="contract-summary">
            <h3>Custo do Contrato</h3>
            <p>Total: R${totalCost.toFixed(2)}</p>
        </div>
    );
};

export default ContractSummary;
