import * as React from "react";
import Helmet from "react-helmet";
import Image1 from "../../../statics/img/room1.jpg";
import Image2 from "../../../statics/img/room2.jpg";
import Image3 from "../../../statics/img/room3.jpg";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BedroomChildRoundedIcon from "@mui/icons-material/BedroomChildRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useState } from "react";
import { useEffect, setState } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../../Utils/common";
import references from "../../../assets/References.json";

export default function Roomcard(props) {
  const [roomimg, setRoomimg] = useState(null);
  const [rf2, setrf2] = useState(null);

  useEffect(() => {
    const queryString = window.location.toString();
    const hotelid = queryString.slice(-1);
    axios
      .get(makeURL(references.url_hotelrooms + hotelid + "/" + "images/"), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((response) => {
        console.log("images response:", response.data);
        // console.log("rooms response:" , response.data.option);
        setRoomimg(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
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
                {props.type}
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
                            {roomimg
                              ? roomimg.map((rimg) => (
                                  <li
                                    data-target="#thumbnail-preview-indicators"
                                    data-slide-to="0"
                                    class="active"
                                  >
                                    <div class="thumbnail">
                                      <img
                                        class="img-responsive w-100"
                                        src={rimg}
                                      ></img>
                                    </div>
                                  </li>
                                ))
                              : null}

                            {/* <li
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
                            </li> */}
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
                              {props.roomfacilities
                                ? props.roomfacilities
                                    .slice(0, 13)
                                    .map((rf1) => (
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
                                          {rf1.name}
                                        </small>
                                      </span>
                                    ))
                                : null}
                            </div>
                          </div>
                          <div className="col">
                            <div className="row">
                              {props.roomfacilities
                                ? props.roomfacilities.slice(13).map((rf2) => (
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
                                        {rf2.name}
                                      </small>
                                    </span>
                                  ))
                                : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <h6 className="mt-3">In your private bathroom</h6>
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
              {props.sleeps === 1 ? (
                <div className="col">
                  <PersonRoundedIcon />
                  <span className="ms-2 card-text">
                    <small>Adult</small>
                  </span>
                </div>
              ) : (
                <div className="col">
                  <PeopleAltIcon />
                  <span className="ms-2 card-text">
                    <small>Double</small>
                  </span>
                </div>
              )}

              {props.option === "Breakfast" ? (
                <div className="col">
                  <RestaurantRoundedIcon />
                  <span className="ms-2 card-text">
                    <small>{props.option}</small>
                  </span>
                </div>
              ) : null}
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
                  <RemoveCircleOutlineIcon fontSize="small" />
                  <span className="ms-1">
                    It is not possible to cancel the reservation.
                  </span>
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
                <p className="mb-1 rate">${props.price} </p>
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
  );
}
