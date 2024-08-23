import React from 'react';

const ContractDetails = ({ contract }) => {
    return (
        <div className="contract-details">
            <h2>{contract.projeto} - {contract.descricao}</h2>
            <p><strong>Início:</strong> {contract.inicio_contrato}</p>
            <p><strong>Fim:</strong> {contract.fim_contrato}</p>
            <p><strong>Módulos:</strong> {contract.modulo.join(', ')}</p>
            <p><strong>Tipo de Demanda:</strong> {contract.tipo_demanda.join(', ')}</p>
            <p><strong>Baseline:</strong> {contract.baseline} horas</p>
        </div>
    );
};

export default ContractDetails;
