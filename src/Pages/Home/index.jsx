import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <body>
      <nav>
        <li>
          <Link to="/realtime">Real-Time</Link>
        </li>
        <li>
          <Link to="/forecasts">Forecast</Link>
        </li>
      </nav>
      <Outlet />
    </body>
  );
};
export default Home;
