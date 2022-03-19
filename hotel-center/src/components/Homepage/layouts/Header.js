import React from "react";
import Background from "../../../statics/img/background5.jpg";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <div>
      <div  className="d-none d-lg-block">
      <div className="header">
      <div>
        <img src={Background} alt="Background image" />
      </div>
      <div className="search-form">
        <SearchForm />
      </div>
    </div>
      </div>

      <div  className="d-lg-none">
        <div>
          <img class="img-fluid" src={Background} alt="Background image" style={{height:"auto"}}/>
        </div>
        {/* <div className="search-form">
          <SearchForm />
        </div> */}
      </div>
    </div>
  );
}

export default Header;
