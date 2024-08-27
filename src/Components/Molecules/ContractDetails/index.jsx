import React from 'react';
import PropTypes from 'prop-types';
import Table from '../Table/index';
import styles from './index.module.scss';
import DashSection from '../../Templates/DashSectionTemplate';

const ContractDetails = ({ contract }) => {
  const headers = ['Valor Envolvido', 'Início de Vigência', 'Final de Vigência', 'Horas Contratadas', 'Horas Utilizadas'];
  const data = [
    [
      `R$ ${contract.valor_contrato.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      new Date(contract.inicio_contrato).toLocaleDateString('pt-BR'),
      new Date(contract.fim_contrato).toLocaleDateString('pt-BR'),
      `${contract.baseline}h`,
      `${contract.baseline_consumido}h`
    ]
  ];

  return (
      <div className={styles.contractDetails}>
        <div style={{ marginBottom: "2rem"}}>
        <DashSection title={`${contract.projeto} - ${contract.descricao}`}>
        <Table headers={headers} data={data} />  </DashSection></div>
        <DashSection title={"Módulos Contratados"}>
            <div className={styles.modules}>  
          <div className={styles.modulesList}>
            {contract.modulo.map((mod, index) => (
              <span key={index} className={styles.moduleItem}>{mod}</span>
            ))}
          </div>
        </div></DashSection>
      </div>

  );
};

ContractDetails.propTypes = {
  contract: PropTypes.shape({
    projeto: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    valor_contrato: PropTypes.number.isRequired,
    inicio_contrato: PropTypes.string.isRequired,
    fim_contrato: PropTypes.string.isRequired,
    baseline: PropTypes.number.isRequired,
    baseline_consumido: PropTypes.number.isRequired,
    modulo: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ContractDetails;
