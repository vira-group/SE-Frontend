import React from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { logout } from "../../../Utils/connection";
import Logo from "../../../statics/logo/logo2.png";
import DiamondIcon from "@mui/icons-material/Diamond";
// import SpeedIcon from "@mui/icons-material/Speed";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LogoutIcon from "@mui/icons-material/Logout";
import KingBedIcon from "@mui/icons-material/KingBed";
import ApartmentIcon from "@mui/icons-material/Apartment";

export default function Sidebar(props) {
  const handleLogout = () => {
    logout();
  };

  return (
    <ProSidebar
      toggled={props.toggled}
      breakPoint="md"
      onToggle={props.handleToggleSidebar}
      style={{ backgroundColor: "white !important" }}
    >
      <SidebarHeader>
        <a href="/" className="navbar-brand logo">
          <img src={Logo} alt="Hotel Center" />
          <span className="fw-bold logo-text-font">Hotel Center</span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<ApartmentIcon />}>
            <Link to="/profile/IncreaseCredit">
              <p className="mb-0">Hotels</p>
            </Link>
          </MenuItem>
          <MenuItem icon={<KingBedIcon />}>
            <Link to="#">
              <p className="mb-0">Rooms</p>
            </Link>
          </MenuItem>
          <SubMenu title="Components" icon={<DiamondIcon />}>
            <MenuItem>
              <Link to="#">
                <p className="mb-0">Component 1</p>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">
                <p className="mb-0">Component 2</p>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<LogoutIcon />}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter
        style={{
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <CopyrightIcon />
        Vira Team
      </SidebarFooter>
    </ProSidebar>
  );
}
