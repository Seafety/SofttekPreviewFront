import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Times from "./Pages/Times";
import Contratos from "./Pages/Contratos";
import RealTime from "./Pages/Home/RealTime";
import Forecast from "./Pages/Home/Forecast";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<RealTime />} />
        <Route path="/realtime" element={<RealTime />} />
        <Route path="/forecasts" element={<Forecast />} />
      </Route>
      <Route path="/Contratos" element={<Contratos />} />
      <Route path="/Times" element={<Times />} />
    </Routes>
  );
};
export default AppRoutes;
