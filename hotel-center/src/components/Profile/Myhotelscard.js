import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import "../../css/Profile.css";

export default function Myhotelscard(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleClick = () => {
    let hotelid = props.id;
    console.log('hotel id: ', hotelid);
    const url = "http://localhost:3000/adminpanel/" + hotelid + "/statistics";
    window.location.href = url;
  }

  return (
    <div class="col">
      <div class="card h-100">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
        </div>
        <div className="card-footer myhotels">
          <button type="button" className="btn btn-primary view-hotel-button" onClick={handleClick}>
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
