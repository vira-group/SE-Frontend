import { one_hotel_connection, one_hotel_image } from "../../Utils/connection";
import * as React from "react";
import Helmet from "react-helmet";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
// import Hotelpage2 from "../Homepage/layouts/Hotelpage2";
import { useState } from "react";
import { useEffect } from "react";
import SimpleAccordion from "./accordion";

export default function HotelPage() {
  const initialState = {
    name: "Nobu",
    header: null,
    city: "Tehran",
    state: "Tehran",
    description: "Beautifula",
    rate: "5.0",
    phone_numbers: "09123433300",
    start_date: "2022-04-20",
  };
  const [id, setId] = useState(null);
  const [hotel, setHotel] = useState(initialState);
  const [images, setImages] = useState([]);

  useEffect(() => {
    var splitted = window.location.toString().split("/");
    setId(decodeURIComponent(splitted.pop()));
  }, []);

  useEffect(() => {
    if (id === null) {
      return;
    }
    one_hotel_connection(id).then((res) => {
      if (res !== false) {
        console.log("RESULT:", res);
        setHotel(res);
      }
    });

    one_hotel_image(id).then((res) => {
      if (res !== false) {
        setImages(res.forEach((data) => data.image));
      }
    });
  }, [id]);
  console.table(hotel);

  return (
    <div className="div">
      <div className="div">
        <div className="div">
          <div className="container d-none d-md-block">
            <br />
            <br />
            <div className="row-md-12" title="HotelName">
              <h2>{hotel.name}</h2>
            </div>
            <div className="row ">
              <div className="col-5 icon2  gx-3 col-sm-1 d-flex">
                <FmdGoodIcon />
                {hotel.city},{hotel.state}
              </div>
              <br />
              <div className="col-12 icon col-md-2 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                  style={{ marginRight: 5 }}
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                <span>{hotel.rate}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="row ">
                  <div className="col-12 gy-3 ">
                    <img
                      src={hotel.header}
                      className="img-fluid imggh"
                      alt="..."
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6 gy-3">
                    <img
                      src={images[0]}
                      className="img-fluid imgg"
                      alt="..."
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                  <div className="col-6 gy-3">
                    <img
                      src={images[1]}
                      className="img-fluid imgg"
                      alt="..."
                      style={{ borderRadius: "5px" }}
                    />
                  </div>

                  <div className="col-6 gy-3">
                    <img
                      src={images[2]}
                      className="img-fluid imgg"
                      alt="..."
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                  <div className="col-6 gy-3">
                    <img
                      // src={pic4}
                      src={images[3]}
                      className="img-fluid imgg"
                      alt="..."
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide d-md-none"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={images[3]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={images[2]} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={images[1]} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }} />

        <br />

        <div className="row">
          <div className="col">
            <SimpleAccordion description={hotel.description} />
          </div>
        </div>

        {/* <Hotelpage2 id={id} /> */}
      </div>
    </div>
  );
}
