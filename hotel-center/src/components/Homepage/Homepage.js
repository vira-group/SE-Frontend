import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Homepagecontent from "./Homepagecontent";
import Footer from "./layouts/Footer";


export default function Homepage() {


  return (
    <div>
      <Navbar />
      <Header />
      <Homepagecontent/>
      <Footer />
    </div>
  );
}
