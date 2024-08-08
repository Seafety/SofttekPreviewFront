import React from "react";
import HeaderComponent from "./Components/Organisms/Header/Index";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./Styles/_global.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <HeaderComponent />
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
