import React from "react";
import Logo from "../../../statics/logo/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../../Login/Login";

const Main = ({ handleToggleSidebar }) => {
  return (
    <div className="w-100">
      <div className="adminpanel-header-mobile">
        <a href="/" className="navbar-brand logo d-md-none">
          <img src={Logo} alt="Hotel Center" />
          <span className="fw-bold logo-text-font">Hotel Center</span>
        </a>
        <div
          className="btn-toggle d-md-none"
          onClick={() => handleToggleSidebar(true)}
        >
          <MenuIcon fontSize="large" />
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Main;
