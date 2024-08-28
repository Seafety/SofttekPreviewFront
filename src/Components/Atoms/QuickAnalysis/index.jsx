import React from 'react';
import styles from './index.module.scss';
import search from '../../../Assets/search.svg';

const QuickAnalysis = () => {
  return (
    <div className={styles.container}>
      <button className={styles.analysisButton}>Análise Rápida</button>
      <input 
        className={styles.searchInput} 
        type="text" 
        placeholder="O que deseja saber sobre o contrato?" 
      />
        <img src={search}></img>
    </div>
  );
};

export default QuickAnalysis;
