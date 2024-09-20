import React, { useState } from 'react';
import ContractList from "../../Components/Molecules/ContractList";  
import ContractDetails from "../../Components/Molecules/ContractDetails";
import ContractStats from "../../Components/Molecules/ContractStats"; 
import contractsData from "../../json/projetos.json";
import styles from './index.module.scss';
import TeamDivision from '../../Components/Molecules/TeamDivision';
import CriticidadeBar from '../../Components/Molecules/CriticidadeBar';
import AnnotationBox from '../../Components/Organisms/AnnotationBox';
import ContractSummary from '../../Components/Molecules/ContractSummary';
import QuickAnalysis from '../../Components/Atoms/QuickAnalysis';

const Contratos = () => {
  const [contracts] = useState(contractsData.contratos);
  const [selectedContractId, setSelectedContractId] = useState(contracts[0]?.projeto);
  const [filterOwner, setFilterOwner] = useState(''); // Estado para o filtro de "owner"
  

  const filteredContracts = contracts.filter(contract =>
    contract.owner.toLowerCase().includes(filterOwner.toLowerCase())
  );

  const selectedContract = filteredContracts.find(contract => contract.projeto === selectedContractId);



  return (
    <div style={{maxHeight:'85vh', overflowY:'auto', overflowX:'hidden', width:'100%'}} className={styles.pageContainer}>
   
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Filtrar por Owner"
        value={filterOwner}
        onChange={(e) => setFilterOwner(e.target.value)}
        className={styles.filterInput}
      />
    </div>
    
    
    <div className={styles.container}>
        {filteredContracts.length === 0 ? (
          <p className={styles.noContractsMessage}>Nenhum contrato encontrado para o filtro aplicado.</p>
        ) : (
          <>
            <ContractList 
              contracts={filteredContracts} 
              onSelectContract={setSelectedContractId} 
              selectedContractId={selectedContractId} 
            />
            {selectedContract && (
              <div className={styles.detailsContainer}>
                <QuickAnalysis />
                <ContractSummary contract={selectedContract} />
                <ContractDetails contract={selectedContract} />
                <TeamDivision contract={selectedContract} />
                <ContractStats contract={selectedContract} />
                <div className={styles.aboutContainer}>
                  <CriticidadeBar contract={selectedContract} />
                  <AnnotationBox contractId={selectedContractId} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Contratos;
