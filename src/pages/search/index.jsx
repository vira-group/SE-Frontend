import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { cookies, makeURL } from "../../Utils/common";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Button, Link } from "@mui/material";
import Rating from "@mui/material/Rating";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";

import { useRouter } from "next/router";
import { useEffect } from "react";
import HotelCard from "src/components/Hotel/HotelCard";
import pic from "../../../public/img/room7.jpg";

import { result } from "lodash";

export default function search() {
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);

  const locationSearchCallAPI = () => {
    const longitude = router.query.longitude;
    const latitude = router.query.latitude;
    var url = makeURL("/hotel/nearhotel/");

    axios
      .get(url, {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          y: longitude,
          x: latitude,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (router.query.longitude) {
      locationSearchCallAPI();
      return;
    } else if (!router.query.city) {
      return;
    }
    var url =
      makeURL(references.url_basic_hotel_search) +
      "0" +
      "?city=" +
      router.query.city +
      "&check_in=" +
      router.query.check_in +
      "&check_out=" +
      router.query.check_out +
      "&size=" +
      router.query.size;
    const getInitialResult = async () => {
      axios
        .get(url, {
          headers: {
            Authorization: cookies.get("Authorization"),
          },
        })
        .then((response) => {
          console.log(response.data);
          setSearchResult(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getInitialResult();
  }, [router]);

  const [value, setValue] = React.useState(1);
  const [filterIson, setFilterIsOn] = useState(false);
  const [filteredHotel, setFilteredhotel] = useState(null);

  // hotel facilities
  const [hf1, setHf1] = useState(false);
  const [hf2, setHf2] = useState(false);
  const [hf3, setHf3] = useState(false);
  const [hf4, setHf4] = useState(false);
  const [hf5, setHf5] = useState(false);
  const [hf6, setHf6] = useState(false);
  const [hf7, setHf7] = useState(false);
  const [hf8, setHf8] = useState(false);
  const [hf9, setHf9] = useState(false);
  const [hf10, setHf10] = useState(false);

  var selectedhfs = "";

  const handleSearchclick = () => {
    setFilterIsOn(true);
    // console.log("star value:", value);
    if (hf1) selectedhfs += "facilities=Parking&";
    if (hf2) selectedhfs += "facilities=Room service&";
    if (hf3) selectedhfs += "facilities=Restaurant&";
    if (hf4) selectedhfs += "facilities=Sofa&";
    if (hf5) selectedhfs += "facilities=Bathroom&";
    if (hf6) selectedhfs += "facilities=Taxi service&";
    if (hf7) selectedhfs += "facilities=WiFi&";
    if (hf8) selectedhfs += "facilities=Bar&";
    if (hf9) selectedhfs += "facilities=Telephone&";
    if (hf10) selectedhfs += "facilities=Television&";
    if (value) selectedhfs += "rate=" + value + "&";

    console.log(
      "selected hotel facilities: ",
      references.url_allhotels_facilities + selectedhfs
    );

    axios
      .get(makeURL(references.url_allhotels_facilities + selectedhfs), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((response) => {
        console.log("filter response: ", response.data);
        setFilteredhotel(response.data);
        // document.location.reload(true);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const removeFilters = () => {
    if (hf1) setHf1(false);
    if (hf2) setHf2(false);
    if (hf3) setHf3(false);
    if (hf4) setHf4(false);
    if (hf5) setHf5(false);
    if (hf6) setHf6(false);
    if (hf7) setHf7(false);
    if (hf8) setHf8(false);
    if (hf9) setHf9(false);
    if (hf10) setHf10(false);
    document.location.reload(true);
  };

  // useEffect(() => {
  //   // console.log(cookies.get("Authorization"));
  //   axios
  //     .get(makeURL(references.url_allhotels), {
  //       headers: {
  //         Authorization: cookies.get("Authorization"),
  //       },
  //     })
  //     .then((response) => {
  //       setHotel(response.data);
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // console.log(")))))))))) ");
  // }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div>
            <div className="mt-4">
              <div className="card">
                <div className="card-body">
                  <span className="fs-2 card-title" title="stars">
                    Star Ranking
                  </span>
                  <div className="rating-start" style={{ textAlign: "center" }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log("star value:", newValue);
                      }}
                    />
                  </div>
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
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf1}
                          onClick={() => setHf1(!hf1)}
                        />
                      }
                      label="Parking"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf2}
                          onClick={() => setHf2(!hf2)}
                        />
                      }
                      label="Room service"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf3}
                          onClick={() => setHf3(!hf3)}
                        />
                      }
                      label="Restaurant"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf4}
                          onClick={() => setHf4(!hf4)}
                        />
                      }
                      label="Sofa"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf5}
                          onClick={() => setHf5(!hf5)}
                        />
                      }
                      label="Bathroom"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf6}
                          onClick={() => setHf6(!hf6)}
                        />
                      }
                      label="Taxi service"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf7}
                          onClick={() => setHf7(!hf7)}
                        />
                      }
                      label="WiFi"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf8}
                          onClick={() => setHf8(!hf8)}
                        />
                      }
                      label="Bar"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf9}
                          onClick={() => setHf9(!hf9)}
                        />
                      }
                      label="Telephone"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          classes={{
                            root: {
                              "&$checked": {
                                color: "#cd9a2d",
                              },
                            },
                            checked: {},
                          }}
                          checked={hf10}
                          onClick={() => setHf10(!hf10)}
                        />
                      }
                      label="Television"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary hotel-room w-100 mt-1"
              onClick={handleSearchclick}
            >
              Search
            </button>
            <div className="">
              {filterIson == true && (
                <Typography sx={{ textAlign: "center" }}>
                  <Button
                    style={{
                      color: "black",
                      textTransform: "unset",
                      marginTop: "15px",
                    }}
                  >
                    <Link
                      underline="hover"
                      sx={{ cursor: "pointer" }}
                      color="inherit"
                      onClick={removeFilters}
                    >
                      Remove all filters
                    </Link>
                  </Button>
                </Typography>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-9 favorites">
          {filterIson == true ? (
            filteredHotel ? (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* {filteredHotel.map((h) => (
                  <Newhotelcard
                    address={h.hotel.address}
                    description={h.hotel.description}
                    image={null}
                    name={h.hotel.name}
                    rate={h.hotel.rate || 4}
                    reviews={h.reply_count || 3}
                    id={h.hotel.id}
                  />
                ))} */}
              </div>
            ) : (
              <div className="container">test</div>
            )
          ) : result ? (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {searchResult.map((h) => (
                <HotelCard hotel={h.hotel ? h.hotel : h} image={pic} />
              ))}
            </div>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15vh",
              }}
            >
              <CircularProgress size="5rem" style={{ color: "#cd9a2d" }} />
            </Box>
          )}
        </div>
      </div>
    </div>
  );
}
