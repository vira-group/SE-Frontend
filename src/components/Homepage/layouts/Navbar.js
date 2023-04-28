import React, { Component, Fragment } from "react";
import Logo from "../../../../public/logo/logo2.png";
// import UseAnimations from "react-useanimations";
// import menu3 from "react-useanimations/lib/menu3";
import { me, logout } from "../../../Utils/connection";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Image from "next/image";

import { Divide as Hamburger } from "hamburger-react";
import NavbarCSS from "./Navbar.module.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      navbarMoved: false,
      is_loggedin: false,
      anchorEl: null,
      open: Boolean(null),
      navbarExpand: false,
      isAdminPanelPage: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    document.scrollingElement.scrollTop = 0;
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    document.addEventListener("scroll", this.handleScroll);
    // window.innerWidth < 992
    //   ? this.setState({
    //       navbarExpand: false,
    //     })
    //   : this.setState({
    //       navbarExpand: true,
    //     });
    this.setState({
      isAdminPanelPage: window.location.pathname.includes("adminpanel"),
    });

    me().then((response) => {
      this.setState({ is_loggedin: response });
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resisze", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ navbarExpand: window.innerWidth < 992 });
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

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
      open: Boolean(event.currentTarget),
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: Boolean(null),
    });
  };

  handleGotoProfile = () => {
    console.log("profile profile profile profile");
    window.location.href = "http://localhost:3000/profile";
  };

  render() {
    const navbarExpand = this.state.navbarExpand;
    return (
      <nav
        className={
          this.state.isAdminPanelPage
            ? "d-none"
            : this.state.navbarMoved
            ? "navbar navbar-expand-lg navbar-light sticky-top nav-scrolled w-100 nav-style"
            : "navbar navbar-expand-lg navbar-light sticky-top nav-top w-100 nav-style"
        }
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand logo">
            <Image src={Logo} alt="Hotel Center" height={48} />
            <span className="fw-bold logo-text-font">Hotel Center</span>
          </a>

          {navbarExpand && (
            <button
              className={NavbarCSS.hamburgerButton}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <Hamburger size={20} distsnce="sm" />
            </button>
          )}

          <div className="collapse navbar-collapse" id="navMenu">
            <div className="ms-auto pt-3 pt-sm-0">
              <ul className="navbar-nav">
                {!this.state.is_loggedin ? (
                  <Fragment>
                    {/*  {this.state.navbarExpand ? <Fragment /> : <hr />} */}
                    <hr style={{ margin: "1rem 0rem 0.5rem 0rem" }} />
                    <li className="nav-item">
                      <a href="http://localhost:3000/login">
                        <button
                          type="button"
                          className="btn btn-outline-dark me-2 nav-button nav-menu-style"
                        >
                          Login
                        </button>
                      </a>
                    </li>
                    <li className="nav-item">
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
                  <Fragment>
                    {this.state.navbarExpand ? (
                      <li className="nav-item">
                        <IconButton
                          onClick={this.handleClick}
                          size="small"
                          aria-controls={
                            this.state.open ? "account-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={this.state.open ? "true" : undefined}
                        >
                          <Avatar sx={{ width: 32, height: 32 }}>
                            <PersonIcon />
                          </Avatar>
                        </IconButton>
                      </li>
                    ) : (
                      <Fragment>
                        <hr />
                        <li className="nav-item">
                          <button
                            type="button"
                            className="btn btn-outline-dark nav-button nav-menu-style"
                            onClick={this.handleGotoProfile}
                          >
                            Profile
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="btn btn-outline-dark nav-button nav-menu-style"
                            onClick={() => {
                              this.handleLogout();
                            }}
                          >
                            Logout
                          </button>
                        </li>
                      </Fragment>
                    )}
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
          <Menu
            anchorEl={this.state.anchorEl}
            id="account-menu"
            open={this.state.open}
            onClose={this.handleClose}
            onClick={this.handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                // "&:before": {
                //   content: '""',
                //   display: "block",
                //   position: "absolute",
                //   top: 0,
                //   right: 14,
                //   width: 10,
                //   height: 10,
                //   bgcolor: "background.paper",
                //   transform: "translateY(-50%) rotate(45deg)",
                //   zIndex: 0,
                // },
              },
            }}
            transformOrigin={{ horizontal: "left", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              style={{ width: "150px" }}
              onClick={() => {
                this.handleGotoProfile();
              }}
            >
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.handleLogout();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </nav>
    );
  }
}

export default Navbar;
