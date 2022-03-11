import React, { useState } from "react";
import Logo from "../../../statics/logo/logo.png";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";

function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark nav-background">
      <div className="container">
        <a href="#" className="navbar-brand logo">
          <img src={Logo} alt="Hotel Center" />
          <div className="text-theme-white">Hotel Center</div>
        </a>

        <button
          className="navbar-toggler nav-hamburger-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <UseAnimations
            reverse={openMenu}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
            size={40}
            animation={menu3}
            speed={3}
            strokeColor="#f8f9fa"
          />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <div className="ms-auto pt-3 pt-sm-0">
            <button type="button" class="btn btn-outline-light me-2 nav-button">
              Login
            </button>
            <button type="button" class="btn btn-outline-light nav-button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
