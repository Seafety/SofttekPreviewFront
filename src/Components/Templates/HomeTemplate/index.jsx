import React from "react";
import PropTypes from "prop-types";
import SubNavDash from "../../Organisms/SubNavDash";

function HomeTemplate({ children }) {
  return (
    <div style={{maxHeight:'85vh', overflowY:'auto', overflowX:'hidden', width:'100%'}}>
      <SubNavDash />  
      {children}
    </div>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
