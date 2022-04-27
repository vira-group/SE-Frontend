import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import "../../css/Profile.css";

export default function Profile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <h5 className="ms-4 mt-5">Account</h5>
          <div className="container edit-profile-form mt-3">
            <div className="row">
              <div className="col-lg-3">
                <div className="profile-img">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="col-lg-8" style={{ marginTop: "52px" }}>
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  Edit profile photo
                </p>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput1"
                    className="ms-2 mt-1 form-label"
                  >
                    Full name
                  </label>
                </div>
                <div className="col-lg-9">
                  <input
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                  ></input>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    National code
                  </label>
                </div>
                <div className="col-lg-9">
                  <input
                    type="code"
                    className="form-control"
                    id="exampleFormControlInput2"
                  ></input>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Gender
                  </label>
                </div>
                <div className="col-lg-9">
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="male"
                    ></input>
                    <label className="ms-2 form-check-label" for="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="female"
                    ></input>
                    <label className="ms-2 form-check-label" for="famale">
                      Female
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="other"
                    ></input>
                    <label className="ms-2 form-check-label" for="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3 ms-2">
                  <label for="date" className="col-1 col-form-label">
                    Birthday
                  </label>
                </div>
                <div className="col birthday-inp">
                  <form action="/action_page.php">
                    <input className="col-12 birthdate" type="date" id="birthday" name="birthday"></input>
                  </form>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput3"
                    className="ms-2 mt-1 form-label"
                  >
                    Phone number
                  </label>
                </div>
                <div className="col-lg-9">
                  <input
                    type="phonenumber"
                    className="form-control"
                    id="exampleFormControlInput3"
                  ></input>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput4"
                    className="ms-2 mt-1 form-label"
                  >
                    Email address
                  </label>
                </div>
                <div className="col-lg-9">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput4"
                    placeholder="name@example.com"
                  ></input>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput5"
                    className="ms-2 mt-1 form-label"
                  >
                    Telephone
                  </label>
                </div>
                <div className="col-lg-9">
                  <input
                    type="telephone"
                    className="form-control"
                    id="exampleFormControlInput5"
                  ></input>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="ms-2 form-label"
                  >
                    About me
                  </label>
                </div>
                <div className="col-lg-9">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
