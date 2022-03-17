import React from "react";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Hotelcard from './layouts/Hotelcard';
import { Grid, Container, Divider} from '@mui/material';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Grid item xs={12} style={{marginTop:"25rem"}}>{<Hotelcard />}</Grid>
      {/* <Hotelcard/> */}
    </div>
  );
}
