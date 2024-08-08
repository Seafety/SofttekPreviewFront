import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeTemplate({ children }) {
  return (
    <>
      <nav>
        <li>
          <Link to="/realtime">Real-Time</Link>
        </li>
        <li>
          <Link to="/forecasts">Forecast</Link>
        </li>
      </nav>
      {children}
    </>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
