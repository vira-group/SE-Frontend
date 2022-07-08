import * as React from "react";
import { Grid, Box, Button, Container } from "@mui/material";
import Helmet from "react-helmet";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "../../../css/Hotelcard.css";
import axios from "axios";
import references from "../../../assets/References.json";
import { cookies, makeURL, set_cookie } from "../../../Utils/common";

export default function Newhotelcard(props) {
  const [value2, setValue2] = useState(null);

  return (
    <div className="">
      <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }}></Helmet>
      <div className="card homepage-card mt-5">
        <div className="card-body">
          <div className="row">
            <div className="col-md">
              <img
                src={props.image}
                className="card-img-top hotel-card-img"
              ></img>
            </div>
            <div className="col-md-6">
              <div className="col star d-lg-flex">
                <h5 className="card-title">
                  <a
                    className="link hotel-links"
                    href={"/hotelpage/" + props.id}
                  >
                    {props.name}
                  </a>
                </h5>
                <Box
                  sx={{
                    width: 50,
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginLeft: "2px",
                  }}
                >
                  <Rating name="read-only" value={props.rate} readOnly />
                </Box>
              </div>
              <a href="">{props.address}</a>
              {/* <p className="mb-1">Metro access</p> */}
              <p className="card-text">
                {props.description.slice(0, 250) + " ..."}
              </p>
            </div>
            <div className="col-md-2 d-none d-md-block">
              <div className="row">
                <div className="col-md-8 border-end-white">
                  <p className="mb-1 rate ">Superb</p>
                  <p className="mb-1 views">{props.reviews} reviews</p>
                </div>
                <div className="col-md-4" style={{ marginTop: "6px" }}>
                  <span className="score ">{props.rate * 2}</span>
                </div>
              </div>
              <a href="#" className="btn btn-primary hotel-card-btn hoverable">
                Show prices
              </a>
            </div>
            <div className="d-md-none row">
              <div className="col-2 col-sm-4"></div>
              <div className="col-8 col-sm-4 gy-2">
                <a
                  href="#"
                  className="btn btn-primary hotel-card-btn hoverable w-100 text-align-center"
                >
                  Show prices
                </a>
              </div>
              <div className="col-2 col-sm-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
