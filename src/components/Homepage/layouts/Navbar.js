import React, { Fragment, useEffect, useReducer } from "react";
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

function Navbar() {
  const initialState = {
    openMenu: false,
    navbarMoved: false,
    is_loggedin: false,
    anchorEl: null,
    open: Boolean(null),
    navbarExpand: false,
    isAdminPanelPage: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "user/check_admin":
        return {
          ...state,
          isAdminPanelPage: window.location.pathname.includes("adminpanel"),
        };
      case "user/check_auth":
        return {
          ...state,
          is_loggedin: action.response,
        };
      case "predicate/update":
        return {
          ...state,
          navbarExpand: window.innerWidth < 992,
        };
      case "menu/open":
        return {
          ...state,
          openMenu: !state.openMenu,
        };
      case "navbar/open":
        return {
          ...state,
          actionEl: action.target,
          open: true,
        };
      case "navbar/close":
        return {
          ...state,
          actionEl: null,
          open: false,
        };
      case "navbar/update_movement":
        return {
          ...state,
          navbarMoved: action.scrolled >= 10,
        };
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleScroll() {
    var scrolled = document.scrollingElement.scrollTop;
    dispatch({ type: "navbar/update_movement", scrolled: scrolled });
  }
  function updatePredicate() {
    dispatch({ type: "predicate/update" });
  }

  useEffect(() => {
    document.scrollingElement.scrollTop = 0;
    updatePredicate();
    window.addEventListener("resize", updatePredicate);
    document.addEventListener("scroll", handleScroll);

    me().then((response) => {
      dispatch({ type: "user/check_auth", response: response });
    });

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePredicate);
    };
  }, []);

  function handleLogout() {
    logout();
  }

  function handleClick(event) {
    let target = event.currentTarget;
    dispatch({ type: "navbar/open", target: target });
  }

  function handleClose() {
    dispatch({ type: "navbar/close" });
  }

  function handleGotoProfile() {
    console.log("profile profile profile profile");
    window.location.href = "http://localhost:3000/profile";
  }
  return (
    <nav
      className={
        state.isAdminPanelPage
          ? "d-none"
          : state.navbarMoved
          ? "navbar navbar-expand-lg navbar-light sticky-top nav-scrolled w-100 nav-style"
          : "navbar navbar-expand-lg navbar-light sticky-top nav-top w-100 nav-style"
      }
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand logo">
          <Image src={Logo} alt="Hotel Center" height={48} />
          <span className="fw-bold logo-text-font">Hotel Center</span>
        </a>

        {state.navbarExpand && (
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
              {!state.is_loggedin ? (
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
                  {state.navbarExpand ? (
                    <li className="nav-item">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={state.open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={state.open ? "true" : undefined}
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
                          onClick={handleGotoProfile}
                        >
                          Profile
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          type="button"
                          className="btn btn-outline-dark nav-button nav-menu-style"
                          onClick={() => {
                            handleLogout();
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
          anchorEl={state.anchorEl}
          id="account-menu"
          open={state.open}
          onClose={handleClose}
          onClick={handleClose}
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
              handleGotoProfile();
            }}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleLogout();
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

export default Navbar;
