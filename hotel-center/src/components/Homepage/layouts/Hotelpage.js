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
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
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
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "../../../css/Hotelpage.css";
import { srLatn } from "date-fns/locale";
import Image1 from "../../../statics/img/room1.jpg";
import Image2 from "../../../statics/img/room2.jpg";
import Image3 from "../../../statics/img/room3.jpg";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};


export default function Hotelpage() {
  const value = 3.5;

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }}></Helmet>
      <Container maxWidth="lg">
        <Grid container>
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

            <div className="card hotelpage-card mt-3 mb-3">
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
                        <div className="accordion-body cancelation-rules">
                          <RemoveCircleOutlineIcon fontSize="small"/>
                          <span className="ms-1">It is not possible to cancel the reservation.</span>
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

            <div className="">
              <hr className="mb-0 mt-0 hr-text"></hr>
            </div>

            <div className="row">
              <h3 className="mb-3 mt-3">Hotel rules</h3>
              <div
                className="mb-3 me-2 card rule-card"
                style={{ width: "15rem" }}
              >
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    <AlarmIcon fontSize="large" />
                  </h6>
                  <h5 className="card-title">Check in time</h5>
                  <p className="card-text">02:00 (P.M)</p>
                </div>
              </div>
              <div className="mb-3 card rule-card" style={{ width: "15rem" }}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">
                    <AlarmIcon fontSize="large" />
                  </h6>
                  <h5 className="card-title">Check out time</h5>
                  <p className="card-text">12:00 (Noon)</p>
                </div>
              </div>
            </div>

            <div className="">
              <hr className="mb-0 mt-0 hr-text"></hr>
            </div>

            <div className="row mt-3 mb-3">
              <div className="col d-inline-flex">
                <h5>Feedback and comments</h5>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                </Box>
              </div>

              <div className="row">
                <div className="col-md-6 d-grid">
                  <div className="mb-4 card comments-1">
                    <div className="card-body">
                      <h5 className="card-title">Alex</h5>
                      <div className="row">
                        <div className="col">
                          <h6 className="card-subtitle mb-2 text-muted">
                            January 2022 <span className="border-start"></span>
                            <span className="ms-1">
                              4
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="ms-1 mb-1 bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </span>
                          </h6>
                        </div>
                      </div>
                      <p className="card-text">Amazing experience!</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-grid">
                  <div className="mb-4 card d-flex-inline comments-2 ">
                    <div className="card-body">
                      <h5 className="card-title">Diana</h5>
                      <div className="row">
                        <div className="col">
                          <h6 className="card-subtitle mb-2 text-muted">
                            April 2019 <span className="border-start"></span>
                            <span className="ms-1">
                              2
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="ms-1 mb-1 bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </span>
                          </h6>
                        </div>
                      </div>
                      <p className="card-text">
                        event for young people on Friday with loud noise, music
                        and not expected for the venue well into the early
                        hours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-grid">
                  <div className="mb-4 card d-flex-inline comments-3">
                    <div className="card-body">
                      <h5 className="card-title">Chris</h5>
                      <div className="row">
                        <div className="col">
                          <h6 className="card-subtitle mb-2 text-muted">
                            June 2021 <span className="border-start"></span>
                            <span className="ms-1">
                              4
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="ms-1 mb-1 bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </span>
                          </h6>
                        </div>
                      </div>
                      <p className="card-text">
                        Breakfast was exceptional. Nice setup. Good
                        food.pleasant staff
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-grid">
                  <div className="mb-4 card d-inline-grid comments-4">
                    <div className="card-body">
                      <h5 className="card-title">Lionel</h5>
                      <div className="row">
                        <div className="col">
                          <h6 className="card-subtitle mb-2 text-muted">
                            October 2021 <span className="border-start"></span>
                            <span className="ms-1">
                              3
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="ms-1 mb-1 bi bi-star-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                              </svg>
                            </span>
                          </h6>
                        </div>
                      </div>

                      <p className="card-text">
                        it was lovely to eat breakfast in such wonderful
                        surroundings but the breakfast itself was not to a level
                        I would have expected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div col-3>
                <p>something</p>
                <p>something else</p>
                <p>another thing</p>
                <div class="bar-container">
                  <div class="bar-3"></div>
                </div>
              </div> */}
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
