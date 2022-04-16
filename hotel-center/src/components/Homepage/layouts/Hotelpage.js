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
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import ShowerRoundedIcon from "@mui/icons-material/ShowerRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import SignalWifi4BarLockRoundedIcon from "@mui/icons-material/SignalWifi4BarLockRounded";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BedroomChildRoundedIcon from "@mui/icons-material/BedroomChildRounded";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "../../../css/Hotelpage.css";
import { srLatn } from "date-fns/locale";
import Image1 from "../../../statics/img/room1.jpg";
import Image2 from "../../../statics/img/room2.jpg";
import Image3 from "../../../statics/img/room3.jpg";

export default function Hotelpage() {
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }}></Helmet>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <div className="row">
              <h3 className="mb-3">Facilities of the room</h3>
              <div className="col">
                <div className="mb-3 row">
                  <div className="col">Taxi Service</div>
                  <div className="col">
                    <LocalTaxiRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Sofa</div>
                  <div className="col">
                    <ChairRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Bathroom</div>
                  <div className="col">
                    <ShowerRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Telephone</div>
                  <div className="col">
                    <PhoneRoundedIcon />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3 row">
                  <div className="col">WiFi</div>
                  <div className="col">
                    <SignalWifi4BarLockRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Room service</div>
                  <div className="col">
                    <RoomServiceRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Television</div>
                  <div className="col">
                    <TvRoundedIcon />
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col">Gym</div>
                  <div className="col">
                    <FitnessCenterRoundedIcon />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mb-3 btn btn-secondary room-facilities"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              See all facilities
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="AllFacilities"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="AllFacilities">
                      Facilities of the room
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3 row">
                      <div className="col">Taxi Service</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <LocalTaxiRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Sofa</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <ChairRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Bathroom</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <ShowerRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Telephone</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <PhoneRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">WiFi</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <SignalWifi4BarLockRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Room service</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <RoomServiceRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Television</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <TvRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Gym</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <FitnessCenterRoundedIcon />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <div className="col">Restaurant</div>
                      <div className="col" style={{ textAlign: "right" }}>
                        <RestaurantMenuRoundedIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <hr className="mb-0 mt-0 hr-text"></hr>
            </div>
            <h3 className="mb-3 mt-3">Available rooms</h3>

            <div className="card hotelpage-card mt-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8 border-end">
                    <div className="row">
                      <button
                        type="button"
                        className="btn btn-light room-btn mb-1 d-flex justify-content-left"
                        data-bs-toggle="modal"
                        data-bs-target="#roomModal"
                      >
                        Classic single room *Stories 10 to 15*
                      </button>
                      <div
                        className="modal room-facilities fade"
                        id="roomModal"
                        tabindex="-1"
                        aria-labelledby="roomDetails"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-xl modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="roomDetails">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="row modal-body">
                              <div className="col-md-7">
                                {/* <img src={Image} className="modal-images"></img> */}
                                <div
                                  id="thumbnail-preview-indicators"
                                  class="carousel slide"
                                  data-ride="carousel"
                                >
                                  <ol class="carousel-indicators">
                                    <li
                                      data-target="#thumbnail-preview-indicators"
                                      data-slide-to="0"
                                      class="active"
                                    >
                                      <div class="thumbnail">
                                        <img
                                          class="img-responsive w-100"
                                          src={Image1}
                                        ></img>
                                      </div>
                                    </li>
                                    <li
                                      data-target="#thumbnail-preview-indicators"
                                      data-slide-to="1"
                                    >
                                      <div class="thumbnail">
                                        <img
                                          class="img-responsive w-100"
                                          src={Image2}
                                        ></img>
                                      </div>
                                    </li>
                                    <li
                                      data-target="#thumbnail-preview-indicators"
                                      data-slide-to="2"
                                    >
                                      <div class="thumbnail">
                                        <img
                                          class="img-responsive w-100"
                                          src={Image3}
                                        ></img>
                                      </div>
                                    </li>
                                  </ol>
                                  <div class="carousel-inner">
                                    <div class="item slides active">
                                      <div class="slide-1"></div>
                                      
                                    </div>
                                    <div class="item slides">
                                      <div class="slide-2"></div>
                                      
                                    </div>
                                    <div class="item slides">
                                      <div class="slide-3"></div>
                                      
                                    </div>
                                  </div>
                                  <a
                                    class="left carousel-control"
                                    href="#thumbnail-preview-indicators"
                                    role="button"
                                    data-slide="prev"
                                  >
                                    <span class="glyphicon glyphicon-chevron-left"></span>
                                  </a>
                                  <a
                                    class="right carousel-control"
                                    href="#thumbnail-preview-indicators"
                                    role="button"
                                    data-slide="next"
                                  >
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="row">Single classic room</div>
                                <div className="row">
                                  <h6 className="mt-3">Room facilities</h6>
                                  <div className="col">
                                    <div className="row">
                                      <span className="ms-2">
                                        <small>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-check2 me-2"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                          </svg>
                                          Upper floors accessible by elevator
                                        </small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Linen</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Wardrobe or closet</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Hand sanitiser</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Tea/Coffee maker</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Minibar</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Air conditioner</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Safety deposit box</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Soundproofing</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>
                                          Interconnected room(s) available
                                        </small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Heating</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Carpeted</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="row">
                                      <span className="ms-2">
                                        <small>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-check2 me-2"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                          </svg>
                                          Laptop safe
                                        </small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Carbon monoxide detector</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Electric kettle</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Desk</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>TV</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Telephone</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Satellite channels</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Radio</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Air purifiers</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Socket near the bed</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>
                                          Wake up service/Alarm clock
                                        </small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className="mt-3">
                                    In your private bathroom
                                  </h6>
                                  <div className="col">
                                    <div className="row">
                                      <span className="ms-2">
                                        <small>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-check2 me-2"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                          </svg>
                                          Free toiletries
                                        </small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Bathrobe</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Bath or shower</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Toilet</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Towels</small>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="row">
                                      <span className="ms-2">
                                        <small>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-check2 me-2"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                          </svg>
                                          Slippers
                                        </small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Hairdryer</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Towels/sheets (extra fee)</small>
                                      </span>

                                      <span className="ms-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          fill="currentColor"
                                          className="bi bi-check2 me-2"
                                          viewBox="0 0 18 18"
                                        >
                                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <small>Toilet papers</small>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className="mt-3">Smoking</h6>
                                  <div className="col">
                                    <span>
                                      <small>No smoking</small>
                                    </span>
                                  </div>
                                </div>
                                <div className="row">
                                  <h6 className="mt-3">Parking</h6>
                                  <div className="col">
                                    <span>
                                      <small>No parking available.</small>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <PersonRoundedIcon />
                        <span className="ms-2 card-text">
                          <small>Adult</small>
                        </span>
                      </div>
                      <div className="col">
                        <BedroomChildRoundedIcon />
                        <span className="ms-2 card-text">
                          <small>1 single bed</small>
                        </span>
                      </div>
                      <div className="col">
                        <RestaurantRoundedIcon />
                        <span className="ms-2 card-text">
                          <small>Breakfast</small>
                        </span>
                      </div>
                    </div>
                    <div className="">
                      <hr className="mb-1 mt-2 hr-text"></hr>
                    </div>
                    <div className="accordion accordion-flush">
                      <h2
                        className="accordion-header hotelpage-accordion-header"
                        id="headingThree"
                      >
                        <button
                          className="accordion-button collapsed d-flex justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <small>Booking cancellation rules</small>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          You can modify any of this with custom CSS or
                          overriding our default variables.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-1"><div style={{borderLeft:'1px solid', height:'100px'}}></div></div> */}

                  <div className="col-md-4 text-center">
                    <div className="row">
                      <div className="col">
                        <p className="mb-3 rate">Price per night: </p>
                      </div>
                      <div className="col">
                        <p className="mb-1 rate">$2,000 </p>
                      </div>
                    </div>
                    {/* <div className="row"> */}
                    <button className="btn btn-primary hotel-room">
                      Reserve the room
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
