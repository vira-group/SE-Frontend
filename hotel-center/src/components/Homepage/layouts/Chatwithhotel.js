import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "./Chatboxuser";

export default function Messages() {
  const [toggled, setToggled] = useState(false);
  const [hotelId, setHotelId] = useState(null);

  useEffect(() => {
    setHotelId(parseInt(window.location.pathname.split("/")[2], 10));
    let hotelid = window.location.pathname.split("/")[2];
  }, []);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="admin-content">
      <div className="chatbox" style={{ paddingLeft: "12px" }}>
        <ChatBox />
      </div>
    </div>
  );
}
