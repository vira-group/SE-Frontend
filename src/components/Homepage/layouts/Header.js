import React from "react";
import SlideOne from "../../../statics/img/slide01.jpg";
import SlideTwo from "../../../statics/img/slide02.jpg";
import SlideThree from "../../../statics/img/slide03.jpg";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <div className="header">
      <div
        id="carousel"
        className="carousel slide w-100 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SlideOne} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={SlideTwo} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={SlideThree} className="d-block w-100" alt="Slide 3" />
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
