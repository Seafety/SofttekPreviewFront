import React from 'react';
import styles from './index.module.scss';

const ContractList = ({ contracts, onSelectContract, selectedContractId }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Normal':
        return styles.normal;
      case 'Anormal':
        return styles.anormal;
      case 'Crítico':
        return styles.critico; 
      default:
        return '';
    }
  };

  return (
    <div className={styles.contractList}>
      {contracts.map((contract, index) => (
        <div
          key={contract.projeto}
          className={`${styles.contractItem} ${getStatusClass(contract.status)} ${contract.projeto === selectedContractId ? styles.selected : ''}`}
          onClick={() => onSelectContract(contract.projeto)}
        >
          <div className={styles.contractHeader}>
            <span>{`BBR0${index + 5} - ${contract.descricao}`}</span>
            <span className={`${styles.status} ${contract.ativo ? styles.ativo : styles.inativo}`}>
              {contract.ativo ? '🟢 (ativo)' : '🔴 (inativo)'}
            </span>
          </div>
          <div className={`${styles.contractRisk} ${getStatusClass(contract.status)}`}>
            <span>Risco: {contract.status}</span>
          </div>
          <div className={styles.contractValue}>
            <span>{contract.valor_contrato.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractList;
