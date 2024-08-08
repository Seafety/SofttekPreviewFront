import React from "react";
import { Link, Outlet } from "react-router-dom";
import HomeTemplate from "../../Components/Templates/HomeTemplate";

const Home = () => {
  return (
    <HomeTemplate>
      <nav>
        <li>
          <Link to="/realtime">Real-Time</Link>
        </li>
        <li>
          <Link to="/forecasts">Forecast</Link>
        </li>
      </nav>
      <Outlet />
    </HomeTemplate>
  );
};
export default Home;
