import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

function AdminPanel() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`admin-panel ${toggled ? "toggled" : ""} d-flex`}>
      <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
      <Main toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}

export default AdminPanel;
