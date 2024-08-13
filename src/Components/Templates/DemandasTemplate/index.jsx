import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";

function DemandasTemplate({ children }) {
  return (
    <>
      <SubNavDash />
      {children}
    </>
  );
}

DemandasTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DemandasTemplate;
