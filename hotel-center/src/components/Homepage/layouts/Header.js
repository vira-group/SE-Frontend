import React from "react";
import Background from "../../../statics/img/background5.jpg";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <div className="header">
      <div>
        <img src={Background} alt="Background image" />
      </div>
      <div className="search-form">
        <SearchForm />
      </div>
    </div>
  );
}

export default Header;
