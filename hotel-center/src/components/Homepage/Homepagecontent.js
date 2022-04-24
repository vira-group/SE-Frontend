import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import Newhotelcard from "./layouts/Newhotelcard";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import Filter from "../Homepage/layouts/Filter";
import { Grid, Button, Container } from "@mui/material";

export default function Homepagecontent(props) {
  const { hotelid } = useParams();
  // const [hotel, setHotel] = useState(props.hotels);
  const header = {
    header: {
      Authorization: cookies,
    },
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

  return props.hotels ? (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Filter />
        </div>
        <div className="col-lg-9">
          {props.hotels.map((h) => (
            <Newhotelcard
              address={h.address}
              description={h.description}
              image={h.header}
              name={h.name}
              rate={h.rate}
              reviews={h.reply_count}
              id={h.id}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "45vh",
      }}
    >
      <CircularProgress size="5rem" style={{ color: "#cd9a2d" }} />
    </Box>
  );
}
