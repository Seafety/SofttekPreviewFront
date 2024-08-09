import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";

function HomeTemplate({ children }) {
  return (
    <>
      <SubNavDash />
      {children}
    </>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
