import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Hotelcard from "./layouts/Hotelcard";
import Footer from "./layouts/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hotelcard />
      <Footer />
    </div>
  );
}
