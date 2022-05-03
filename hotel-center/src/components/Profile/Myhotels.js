import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import "../../css/Profile.css";
import Myhotelscard from "./Myhotelscard";
import image1 from "../../statics/img/pics/london1.jpg";
import image2 from "../../statics/img/pics/london2.jpg";
import image3 from "../../statics/img/pics/london3.jpg";
import image4 from "../../statics/img/pics/Amsterdom1.jpg";
import image5 from "../../statics/img/pics/Amsterdom2.jpg";

export default function Myhotels() {
  const [hotel, setHotel] = useState(null);

  const header = {
    header: {
      Authorization: cookies,
    },
  };

  useEffect(() => {
    // console.log(cookies.get("Authorization"));
    axios
      .get(makeURL(references.url_allhotels), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((response) => {
        setHotel(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(")))))))))) ");
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card mb-3 myhotels-card">
                <img
                  src={image1}
                  className="card-img-top myhotel-img mt-3 p-1"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">The landmark london</h5>
                  {/* <p className="card-text">
                  In the heart of London's fashionable Marylebone, this deluxe
                  hotel has a stunning glass-roofed 8-story atrium with towering
                  palm trees, an award-winning restaurant, luxurious bedrooms
                  and an indoor...
                </p> */}
                  <div className="myhotel-btn">
                    <a href="#">
                      <button className="btn btn-primary edit-hotel">
                        Edit hotel
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3  myhotels-card">
                <img
                  src={image2}
                  className="card-img-top myhotel-img mt-3 p-1"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">The Montague Gardens</h5>
                  {/* <p className="card-text">
                  Overlooking private, secluded gardens, this 4-star luxury
                  hotel offers 2 restaurants, an on-site gym and 2 sun rooms.
                  Russell Square Underground Station is a 4 minute walk away.
                </p> */}
                  <div className="myhotel-btn">
                  <a href="#">
                      <button className="btn btn-primary edit-hotel">
                        Edit hotel
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 myhotels-card">
                <img
                  src={image3}
                  className="card-img-top myhotel-img mt-3 p-1"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Presidential Apartments</h5>
                  {/* <p className="card-text">
                  On the corner of a beautiful garden square, in London's
                  prestigious Kensington, this modernised period building offers
                  spacious, air-conditioned serviced apartments with free Wi-Fi.
                </p> */}
                  <div className="myhotel-btn">
                  <a href="#">
                      <button className="btn btn-primary edit-hotel">
                        Edit hotel
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card mb-3 myhotels-card">
                <img
                  src={image4}
                  className="card-img-top myhotel-img mt-3 p-1"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Eden hotel Amsterdam</h5>
                  {/* <p className="card-text">
                  Situated in the heart of the city centre, Eden Hotel Amsterdam
                  offers warm-coloured rooms and free WiFi. The famous Rembrandt
                  Square is right around the corner.
                </p> */}
                  <div className="myhotel-btn">
                  <a href="#">
                      <button className="btn btn-primary edit-hotel">
                        Edit hotel
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // hotel ? (
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-lg-3"></div>
  //       <div className="col-lg-9">
  //         <div className="row mt-5">
  //           {hotel.map((h) => (
  //             <Myhotelscard
  //               description={h.description}
  //               image={h.header}
  //               name={h.name}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ) : null;
}
