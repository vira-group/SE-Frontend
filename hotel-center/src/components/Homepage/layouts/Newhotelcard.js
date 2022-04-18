import * as React from "react";
import {
  Avatar,
  Link,
  Grid,
  Box,
  Button,
  Typography,
  ContainerAccordion,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Divider,
  TextField,
  CircularProgress,
} from "@mui/material";
import Helmet from "react-helmet";
import image1 from "../../../statics/img/pics/london1.jpg";
import image2 from "../../../statics/img/pics/london2.jpg";
import image3 from "../../../statics/img/pics/london3.jpg";
import image4 from "../../../statics/img/pics/Amsterdom1.jpg";
import image5 from "../../../statics/img/pics/Amsterdom2.jpg";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "../../../css/Hotelcard.css";
import Slider from "@mui/material/Slider";

export default function Newhotelcard() {
  const [value2, setValue2] = useState(4);
  const [value, setValue] = React.useState(1);
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }}></Helmet>
      <Container maxWidth="lg">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Star Ranking</h6>
                <div className="rating-start" style={{ textAlign: "center" }}>
                  <Rating
                    name="simple-controlled"
                    size="large"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="accordion-item mt-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Facilities
                </button>
              </h2>
              <div className="">
                <hr className="mb-0 mt-0 hr-text"></hr>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label className="form-check-label" for="flexCheckDefault">
                      Parking
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label className="form-check-label" for="flexCheckDefault">
                      Restraunt
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card homepage-card mt-5">
              <div className="card-body">
                <div className="row">
                  <div className="col-md">
                    <img
                      src={image1}
                      className="card-img-top hotel-card-img"
                    ></img>
                  </div>
                  <div className="col-md-6">
                    <div className="col star d-flex">
                      <h5 className="card-title">
                        <a className="link hotel-links" href="/hotelpage2">
                        The Landmark London 
                        </a></h5>
                        <Box
                          sx={{
                            width: 50,
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginLeft: "2px",
                          }}
                        >
                          <Rating
                          name="read-only"
                          value={value2}
                          readOnly
                        />
                        </Box>
                    </div>
                    <a href="">Westminster Borough, London</a>
                    <p className="mb-1">Metro access</p>
                    <p className="card-text">
                      In the heart of London's fashionable Marylebone, this
                      deluxe hotel has a stunning glass-roofed 8-story atrium
                      with towering palm trees, an award-winning restaurant,
                      luxurious bedrooms and an indoor...
                    </p>
                  </div>
                  <div className="col-md-2 d-none d-md-block">
                    <div className="row">
                      <div className="col-md-8 border-end-white">
                        <p className="mb-1 rate ">Superb</p>
                        <p className="mb-1 views">2,362 reviews</p>
                      </div>
                      <div className="col-md-4" style={{marginTop:'6px'}}>
                        <span className="score ">
                          9.0
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary hotel-card-btn hoverable"
                    >
                      show prices
                    </a>
                  </div>
                  <div className="d-md-none row">
                    <div className="col-2 col-sm-4"></div>
                    <div className="col-8 col-sm-4 gy-2">
                      <a
                        href="#"
                        className="btn btn-primary hotel-card-btn hoverable w-100 text-align-center"
                      >
                        show prices
                      </a>
                    </div>
                    <div className="col-2 col-sm-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
