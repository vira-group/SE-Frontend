import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Homepagecontent from "./Homepagecontent";
import Footer from "./layouts/Footer";
import axios from "axios";
import { cookies, makeURL } from "../../Utils/common";
import references from "../../assets/References.json";

export default function Homepage() {
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    axios
      .get(makeURL(references.url_allhotels), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Header setHotels={setHotels} />
      <Homepagecontent hotels={hotels} />
      {/* <Footer /> */}
    </div>
  );
}
