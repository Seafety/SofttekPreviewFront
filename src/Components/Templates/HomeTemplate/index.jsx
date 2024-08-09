import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Status from "../../Atoms/Status";

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
      <Status status="normal" />
      <Status status="anormal" />
      <Status status="critico" />

      {children}
    </>
  );
}

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
