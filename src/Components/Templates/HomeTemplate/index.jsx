import React from "react";
import PropTypes from "prop-types";
import Header from "../../Organisms/Header/Index";

function HomeTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
