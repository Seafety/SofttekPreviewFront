import React, { useState } from 'react';
import ContractList from "../../Components/Molecules/ContractList";  
import ContractDetails from "../../Components/Molecules/ContractDetails";
import ContractStats from "../../Components/Molecules/ContractStats"; 
import contractsData from "../../json/projetos.json";
import styles from './index.module.scss';
import TeamDivision from '../../Components/Molecules/TeamDivision';
import CriticidadeBar from '../../Components/Molecules/CriticidadeBar';
import AnnotationBox from '../../Components/Organisms/AnnotationBox';

const Contratos = () => {
  const [contracts] = useState(contractsData.contratos);
  const [selectedContractId, setSelectedContractId] = useState(contracts[0]?.projeto);

  const selectedContract = contracts.find(contract => contract.projeto === selectedContractId);

  return (
    <div className={styles.container}>
      <ContractList 
        contracts={contracts} 
        onSelectContract={setSelectedContractId} 
        selectedContractId={selectedContractId} 
      />
      {selectedContract && (
        <div className={styles.detailsContainer}>
          <ContractDetails contract={selectedContract} />
          <TeamDivision contract={selectedContract} />
          <ContractStats contract={selectedContract} />
          <div className={styles.aboutContainer}>
                <CriticidadeBar contract={selectedContract} />
                <AnnotationBox contractId={selectedContractId} />
            </div>
        </div>
      )}
    </div>
  );
};

export default Contratos;
