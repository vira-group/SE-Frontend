import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { GoldenTextField } from "../../../theme/GoldenTextField";

const Cities = [
  { id: "0", city: "Tehran", country: "Iran" },
  { id: "1", city: "Karaj", country: "Iran" },
  { id: "2", city: "Shiraz", country: "Iran" },
];

function SearchForm(props) {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [destination, setDestination] = useState(null);

  // useEffect(() => {
  //   console.log(destination);
  //   console.log(checkinDate);
  //   console.log(checkoutDate);
  // }, [destination, checkinDate, checkoutDate]);

  return (
    <div className="card search-form-card">
      <div className="card-body d-flex">
        <Autocomplete
          className="me-2"
          id="destination"
          sx={{ width: 300 }}
          options={Cities}
          autoHighlight
          getOptionLabel={(option) => option.city}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <LocationOnIcon className="mr-2 location-icon" />
              <div className="ps-2">
                <b className="text-dark">{option.city}</b>
                <br />
                <div className="text-secondary">{option.country}</div>
              </div>
            </Box>
          )}
          renderInput={(params) => (
            <GoldenTextField
              {...params}
              label="Destination"
              inputProps={{
                ...params.inputProps,
              }}
              variant="outlined"
            />
          )}
          value={destination}
          onChange={(event, newValue) => {
            setDestination(newValue);
          }}
          // onInputChange={(event, newInputValue) => {
          //   this.handleInputChange(event, newInputValue);
          // }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disablePast
            label="Check in"
            value={checkinDate}
            onChange={(newValue) => {
              setCheckinDate(newValue);
            }}
            renderInput={(params) => (
              <GoldenTextField
                {...params}
                variant="outlined"
                sx={{ width: 200 }}
              />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} className="ms-2">
          <DatePicker
            disablePast
            label="Check out"
            value={checkoutDate}
            onChange={(newValue) => {
              setCheckoutDate(newValue);
            }}
            renderInput={(params) => (
              <GoldenTextField
                {...params}
                variant="outlined"
                className="ms-2"
                sx={{ width: 200 }}
              />
            )}
          />
        </LocalizationProvider>
        <div>
          <button type="button" className="btn btn-primary ms-2 search-button">
            <span>
              <SearchIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
