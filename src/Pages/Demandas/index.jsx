import React from "react";
import { Outlet } from "react-router-dom";
import DemandasTemplate from "../../Components/Templates/DemandasTemplate";

const Demandas = () => {
  return <div>
    <DemandasTemplate />
    <Outlet />
  </div>;
};

export default Demandas;