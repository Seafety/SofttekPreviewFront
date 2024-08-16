import React from "react";
import FinanceSection from "../../../Components/Organisms/FinanceSection";
import ContractsSection from "../../../Components/Organisms/ContractsSection";
import StatusArea from "../../../Components/Organisms/StatusArea";
import styles from "./index.module.scss";
const RealTime = () => {
  return (
    <section className={styles.container}>
      <StatusArea />
      <FinanceSection />
      <ContractsSection />
    </section>
  );
};

export default RealTime;
