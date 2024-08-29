import React from "react";
import { useNavigate } from "react-router-dom";
import SofttekPreviewLogo from "../../../Assets/Logo.svg";
const Logo = () => {

  const navigate = useNavigate();

  return (
    <>
      <img src={SofttekPreviewLogo} alt="logo"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/')} />
    </>
  );
};

export default Logo;
