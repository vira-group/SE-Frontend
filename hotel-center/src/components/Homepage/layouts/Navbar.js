import React, {
  useState,
  useEffect,
  useCallback,
  Component,
  Fragment,
} from "react";
import Logo from "../../../statics/logo/logo2.png";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";
import Signup from "../../Sign_up/sign_up";
import Login from "../../Login/Login";
import { me, logout } from "../../../Utils/connection";
import { cookies } from "../../../Utils/common";
import { fontFamily, fontStyle } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
    me().then((response) => {
      this.setState({ is_loggedin: response });
    });
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

  handleLogout = () => {
    logout();
  };

  render() {
    return (
      <nav
        className={
          this.state.navbarMoved
            ? "navbar navbar-expand-lg navbar-light sticky-top nav-scrolled w-100 nav-style"
            : "navbar navbar-expand-lg navbar-light sticky-top nav-top w-100 nav-style"
        }
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand logo">
            <img src={Logo} alt="Hotel Center" />
            <span className="fw-bold logo-text-font">Hotel Center</span>
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
          <div className="collapse navbar-collapse" id="navMenu">
            <div className="ms-auto pt-3 pt-sm-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link nav-menu-style"
                    aria-current="page"
                    href="#"
                  >
                    Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-menu-style" href="#">
                    Rooms
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle nav-menu-style"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>

                  <ul
                    className="dropdown-menu mt-2"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-menu-style" href="#">
                    Domain
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-menu-style" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-menu-style" href="#">
                    Favorites
                  </a>
                </li>
                {!this.state.is_loggedin ? (
                  <Fragment>
                    <li>
                      <a href="http://localhost:3000/login">
                        <button
                          type="button"
                          className="btn btn-outline-dark me-2 nav-button nav-menu-style"
                        >
                          Login
                        </button>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/sign-up">
                        <button
                          type="button"
                          className="btn btn-outline-dark nav-button nav-menu-style"
                        >
                          Sign up
                        </button>
                      </a>
                    </li>
                  </Fragment>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-dark me-2 nav-button fw-bold"
                    onClick={() => {
                      this.handleLogout();
                    }}
                  >
                    logout
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
