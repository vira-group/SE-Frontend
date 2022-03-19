import React, { useState, useEffect, useCallback, Component } from "react";
import Logo from "../../../statics/logo/logo2.png";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";
import Signup from '../../Sign_up/sign_up';
import Login from '../../Login/Login';
import { me, logout } from "../../../Utils/connection";
import { cookies } from "../../../Utils/common";

class Navbar extends Component {

  constructor() {
		super();
		this.state = {
			openMenu: false,
      navbarMoved: false,
      is_loggedin: false,
		};

	}

  componentDidMount() {
    document.scrollingElement.scrollTop = 0;
    document.addEventListener("scroll", this.handleScroll);
    me().then((response)=>{this.setState({is_loggedin : response})})
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);

  }

  handleOpenMenu = () => {
    this.state.openMenu
      ? this.setState({ openMenu: false })
      : this.setState({ openMenu: true });
  };

  handleScroll = () => {
    var scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 10) {
      if (!this.state.navbarMoved) {
        this.setState({
          navbarMoved: true,
        });
      }
    } else {
      if (this.state.navbarMoved) {
        this.setState({
          navbarMoved: false,
        });
      }
    }
  };
  handleLogout = () =>{
    logout();
  }

  render() {
    return (
      <nav
        className={
          this.state.navbarMoved
            ? "navbar navbar-expand-sm navbar-light sticky-top nav-scrolled w-100 nav-style"
            : "navbar navbar-expand-sm navbar-light sticky-top nav-top w-100 nav-style"
        }
      >
        <div className="container">
          <a href="/" className="navbar-brand logo">
            <img src={Logo} alt="Hotel Center" />
            <span className="fw-bold">Hotel Center</span>
          </a>

          <button
            className="navbar-toggler nav-hamburger-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <UseAnimations
              reverse={this.state.openMenu}
              onClick={this.handleOpenMenu}
              size={40}
              animation={menu3}
              speed={3}
              strokeColor="#cd9a2d"
            />
          </button>
          <div>
            {
              !this.state.is_loggedin ? (
                <div className="collapse navbar-collapse" id="navMenu">
          <div className="ms-auto pt-3 pt-sm-0">
            <a href='http://localhost:3000/login'>
              <button
                type="button"
                className="btn btn-outline-dark me-2 nav-button fw-bold"
                
              >
                Login
              </button>
            </a>

            <a href='http://localhost:3000/sign-up'>
              <button
                type="button"
                className="btn btn-outline-dark nav-button fw-bold"
              >
                Sign up
              </button>
            </a>
          </div>
        </div>

              ) : (

<div className="collapse navbar-collapse" id="navMenu">
          <div className="ms-auto pt-3 pt-sm-0">
            <button
                type="button"
                className="btn btn-outline-dark me-2 nav-button fw-bold"
                onClick={()=>{this.handleLogout()}}
              >
                logout
            </button>
          </div>
        </div>
              )
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;













