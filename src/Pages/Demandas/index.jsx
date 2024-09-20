import React from "react";
import Kanban from "../../Components/Templates/Kanban";
import styles from "./index.module.scss";

const Demandas = () => {
  return <div className={styles.demandasTemplate} >
  <Kanban />
  </div>;
};

export default Demandas;