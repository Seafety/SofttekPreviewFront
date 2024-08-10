import React from "react";
import SubNavDash from "../../Components/Organisms/SubNavDash";
import { Outlet } from "react-router-dom";

const Demandas = () => {
  return <div>
    <SubNavDash></SubNavDash>
    <Outlet />
  </div>;
};

export default Demandas;