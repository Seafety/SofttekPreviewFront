import React from "react";
import { Outlet } from "react-router-dom";
import HomeTemplate from "../../Components/Templates/HomeTemplate";

const Home = () => {
  return (
    <HomeTemplate>
      <Outlet />
    </HomeTemplate>
  );
};
export default Home;
