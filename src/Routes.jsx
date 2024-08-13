import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Times from "./Pages/Times";
import Demandas from "./Pages/Demandas";
import Contratos from "./Pages/Contratos";
import RealTime from "./Pages/Home/RealTime";
import Forecast from "./Pages/Home/Forecast";
import Data from "./Pages/Demandas/Data"
import Board from "./Pages/Demandas/Board"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<RealTime />} />
        <Route path="/realtime" element={<RealTime />} />
        <Route path="/forecasts" element={<Forecast />} />
      </Route>
      <Route path="/demandas" element={<Demandas />}>
        <Route index element={<Data />} />
        <Route path="data" element={<Data />} />
        <Route path="board" element={<Board />} />
      </Route>
      <Route path="/contratos" element={<Contratos />} />
      <Route path="/times" element={<Times />} />
    </Routes>
  );
};
export default AppRoutes;
