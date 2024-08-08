import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("DashBoard");
  const handleActiveNav = (nav) => {
    setActiveNav(nav);
  };
  return (
    <HeaderContext.Provider value={{ activeNav, onActiveNav: handleActiveNav }}>
      {children}
    </HeaderContext.Provider>
  );
};

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
