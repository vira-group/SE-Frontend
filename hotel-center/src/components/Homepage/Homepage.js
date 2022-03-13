import React from "react";
import Navbar from "./layouts/Navbar";
import Background from "../../statics/img/background3.png";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          src={Background}
          alt="Background image"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
