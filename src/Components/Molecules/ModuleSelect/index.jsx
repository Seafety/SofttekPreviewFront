import React, { useState } from "react";
import styles from "./index.module.scss";
import arrow from "../../../Assets/arrow_close_left.svg";

function ModuleSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModule, setActiveModule] = useState("Todos os Módulos");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleActiveModule = (module) => {
    setActiveModule(module);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown__button} onClick={toggleDropdown}>
        <p className={styles.dropdown__button__text}>{activeModule}</p>

        <span
          className={`${styles.icon} ${isOpen ? styles["icon--open"] : ""}`}
        >
          <img src={arrow} alt="seta" />
        </span>
      </button>
      <ul
        className={`${styles.dropdown__menu} ${
          isOpen ? styles["dropdown__menu--open"] : ""
        }`}
      >
        <li onClick={() => toggleActiveModule("Todos os Módulos")}>
          Todos os Módulos
        </li>
        <li onClick={() => toggleActiveModule("Financial Accounting")}>
          Financial Accounting
        </li>
        <li onClick={() => toggleActiveModule("Controlling")}>Controlling</li>
        <li onClick={() => toggleActiveModule("Sales and Distribution")}>
          Sales and Distribution
        </li>
        <li onClick={() => toggleActiveModule("Materials Management")}>
          Materials Management
        </li>
        <li onClick={() => toggleActiveModule("Production Planning")}>
          Production Planning
        </li>
        <li onClick={() => toggleActiveModule("Quality Management")}>
          Quality Management
        </li>
        <li onClick={() => toggleActiveModule("Human Resources")}>
          Human Resources
        </li>
        <li onClick={() => toggleActiveModule("Plant Maintenance")}>
          Plant Maintenance
        </li>
        <li onClick={() => toggleActiveModule("Project System")}>
          Project System
        </li>
        <li onClick={() => toggleActiveModule("Warehouse Management")}>
          Warehouse Management
        </li>
        <li onClick={() => toggleActiveModule("Customer Service")}>
          Customer Service
        </li>
        <li
          onClick={() => toggleActiveModule("Supplier Relationship Management")}
        >
          Supplier Relationship Management
        </li>
        <li onClick={() => toggleActiveModule("Business Intelligence")}>
          Business Intelligence
        </li>
        <li
          onClick={() =>
            toggleActiveModule("Advanced Business Application Programming")
          }
        >
          Advanced Business Application Programming
        </li>
        <li onClick={() => toggleActiveModule("Process Integration")}>
          Process Integration
        </li>
      </ul>
    </div>
  );
}

export default ModuleSelect;
