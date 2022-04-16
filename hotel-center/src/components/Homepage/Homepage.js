import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Hotelcard from "./layouts/Hotelcard";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hotelcard />
    </div>
  );
}
