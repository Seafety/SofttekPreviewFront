import React from "react";
import HeaderComponent from "./Components/Organisms/Header/Index";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./Styles/_global.scss";
import { HeaderProvider } from "./Context/HeaderContext";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <HeaderProvider>
          <HeaderComponent />
        </HeaderProvider>
        <main className="main-content">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
