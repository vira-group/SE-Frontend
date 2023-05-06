import React from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, ProSidebarProvider } from "react-pro-sidebar";
import { logout } from "../../../Utils/connection";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import KingBedIcon from "@mui/icons-material/KingBed";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import ChatIcon from "@mui/icons-material/Chat";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MySidebar(props) {
  const router = useRouter();
  function handleLogout() {
    logout().then((response) => {
      if (response == true) {
        router.push("/");
      }
    });
  }

  return (
    <ProSidebarProvider>
      <Sidebar
        toggled={props.toggled}
        breakPoint="md"
        onToggle={props.handleToggleSidebar}
        style={{ padding: 16 }}
      >
        {/* <SidebarHeader> */}
        <Link href="/" className="navbar-brand logo">
          <Image
            src={"/logo/logo2.png"}
            width={48}
            height={48}
            alt="Hotel Center"
          />
          <span className="fw-bold logo-text-font">Hotel Center</span>
        </Link>
        {/* </SidebarHeader> */}
        {/* <SidebarContent> */}
        <Menu iconShape="circle">
          <MenuItem icon={<BubbleChartIcon />}>
            <Link href={`/adminpanel/${props.id}/statistics`}>
              <p className="mb-0">Statistics</p>
            </Link>
          </MenuItem>
          <MenuItem icon={<KingBedIcon />}>
            <Link href={`/adminpanel/${props.id}/roomsstatus`}>
              <p className="mb-0">Rooms status</p>
            </Link>
          </MenuItem>
          <MenuItem icon={<DomainAddIcon />}>
            <Link href={`/adminpanel/${props.id}/createrooom`}>
              <p className="mb-0">Create room</p>
            </Link>
          </MenuItem>
          <MenuItem icon={<EditIcon />}>
            <Link href={`/adminpanel/${props.id}/edithotel`}>
              <p className="mb-0">Edit hotel</p>
            </Link>
          </MenuItem>
          <MenuItem icon={<ChatIcon />}>
            <Link href={`/adminpanel/${props.id}/messages`}>
              <p className="mb-0">Messages</p>
            </Link>
          </MenuItem>
          <MenuItem
            icon={<LogoutIcon />}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
        {/* </SidebarContent> */}
        {/* <SidebarFooter */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <CopyrightIcon />
          Withoutname Team
        </div>
        {/* </SidebarFooter> */}
      </Sidebar>
    </ProSidebarProvider>
  );
}
