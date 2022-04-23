import * as React from "react";
import Helmet from "react-helmet";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "../../../css/Hotelcard.css";

export default function Filter() {
  const [value, setValue] = React.useState(1);
  return (
    <div>
      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <h7 className="card-title" title="stars">
              Star Ranking
            </h7>
            <div className="rating-start" style={{ textAlign: "center" }}>
              <Rating
                name="simple-controlled"
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
              className="accordion-button filter-acc collapsed"
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
                  id="f1"
                ></input>
                <label className="form-check-label" for="f1">
                  Parking
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f2"
                ></input>
                <label className="form-check-label" for="f2">
                  Restraunt
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f3"
                ></input>
                <label className="form-check-label" for="f3">
                  Room service
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f4"
                ></input>
                <label className="form-check-label" for="f4">
                  Gym
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f5"
                ></input>
                <label className="form-check-label" for="f5">
                  WiFi
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f6"
                ></input>
                <label className="form-check-label" for="f6">
                  Swimming pool
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f7"
                ></input>
                <label className="form-check-label" for="f7">
                  Family rooms
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f8"
                ></input>
                <label className="form-check-label" for="f8">
                  Taxi service
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="f9"
                ></input>
                <label className="form-check-label" for="f9">
                  Non-smoking rooms
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item mt-2">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button filter-acc collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Room facilities
            </button>
          </h2>
          <div className="">
            <hr className="mb-0 mt-0 hr-text"></hr>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r1"
                ></input>
                <label className="form-check-label" for="r1">
                  Air conditioning
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r2"
                ></input>
                <label className="form-check-label" for="r2">
                  Wardrobe or closet
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r3"
                ></input>
                <label className="form-check-label" for="r3">
                  Ironing facilities
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r4"
                ></input>
                <label className="form-check-label" for="r4">
                  Heating
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r5"
                ></input>
                <label className="form-check-label" for="r5">
                  Coffee machine
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r6"
                ></input>
                <label className="form-check-label" for="r6">
                  Desk
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r7"
                ></input>
                <label className="form-check-label" for="r7">
                  Cable channels
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r8"
                ></input>
                <label className="form-check-label" for="r8">
                  Minibar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="r9"
                ></input>
                <label className="form-check-label" for="r9">
                  Safety deposit box
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary hotel-room w-100 mt-1">
          Search
        </button>
      </div>
    </div>
  );
}
