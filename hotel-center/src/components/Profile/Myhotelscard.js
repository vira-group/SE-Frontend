import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import "../../css/Profile.css";

export default function Myhotelscard(props) {
  return (
    <div className="card mb-3 me-4 myhotels-card">
      <img
        src={props.image}
        className="card-img-top myhotel-img mt-3"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description.slice(0, 150) + " ..."}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
