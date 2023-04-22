import React from "react";
import SearchForm from "./SearchForm";
import Image from "next/image";

function Header(props) {
  return (
    <div className="header">
      <div id="carousel">
        <div style={{ width: "100%", height: "100%" }}>
          <div style={{ position: "absolute", width: "100%", height: "100%" }}>
            <Image quality={100} fill src="/img/slide01.jpg" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <Image quality={100} fill src="/img/slide02.jpg" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <Image quality={100} fill src="/img/slide03.jpg" alt="Slide 3" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <SearchForm setHotels={props.setHotels} />
      </div>
    </div>
  );
}

export default Header;
