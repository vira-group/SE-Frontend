import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Popover from "@mui/material/Popover";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { GoldenTextField } from "../../../theme/GoldenTextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Cities = [
  { id: "0", city: "Tehran", country: "Iran" },
  { id: "1", city: "Karaj", country: "Iran" },
  { id: "2", city: "Shiraz", country: "Iran" },
  { id: "3", city: "Toronto", country: "Canada" },
  { id: "4", city: "London", country: "England" },
  { id: "5", city: "Paris", country: "France" },
  { id: "6", city: "Alberta", country: "Canada" },
];

const oneDay = 24 * 60 * 60 * 1000; // represents one day in miliseconds

function SearchForm(props) {
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [destination, setDestination] = useState(null);
  const [anchor, setAnchor] = React.useState(null);
  const [numberOfAdults, setNumberOfAdults] = React.useState(1);
  const [numberOfChildren, setNumberOfChildren] = React.useState(0);

  // useEffect(() => {
  //   console.log(checkinDate);
  //   console.log(checkoutDate);
  // }, [checkinDate, checkoutDate]);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleChangeNumber = (actionType, guestType) => {
    actionType === "dec"
      ? guestType === "adults"
        ? setNumberOfAdults(numberOfAdults > 1 ? numberOfAdults - 1 : 1)
        : setNumberOfChildren(numberOfChildren > 0 ? numberOfChildren - 1 : 0)
      : guestType === "adults"
      ? setNumberOfAdults(numberOfAdults + 1)
      : setNumberOfChildren(numberOfChildren + 1);
  };

  const open = Boolean(anchor);
  const id = open ? "popover" : undefined;

  return (
    <div className="card search-form-card">
      <div className="card-body row">
        <Autocomplete
          className="col-12 col-lg-4 px-1"
          id="destination"
          // sx={{ width: 300 }}
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
            maxDate={
              checkoutDate ? new Date(checkoutDate.getTime() - oneDay) : null
            }
            label="Check in"
            value={checkinDate}
            onChange={(newValue) => {
              setCheckinDate(newValue);
            }}
            renderInput={(params) => (
              <GoldenTextField
                {...params}
                variant="outlined"
                className="col-6 col-lg-2 px-1 mt-3 mt-lg-0"
                // sx={{ width: 200 }}
              />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} className="ms-2">
          <DatePicker
            disablePast
            minDate={
              checkinDate ? new Date(checkinDate.getTime() + oneDay) : null
            }
            label="Check out"
            value={checkoutDate}
            onChange={(newValue) => {
              setCheckoutDate(newValue);
            }}
            renderInput={(params) => (
              <GoldenTextField
                {...params}
                variant="outlined"
                className="col-6 col-lg-2 px-1 mt-3 mt-lg-0"
                // sx={{ width: 200 }}
              />
            )}
          />
        </LocalizationProvider>
        <GoldenTextField
          className="col-12 col-lg-3 px-1 my-3 my-lg-0"
          aria-describedby={id}
          variant="outlined"
          onClick={handleClick}
          label="Number of guests"
          value={
            numberOfAdults + " adults" + " - " + numberOfChildren + " children"
          }
          placeholder="0 adults - 0 children"
        />
        <div className="col-12 col-lg-1 px-1">
          <button type="button" className="btn btn-primary search-button">
            <span>
              <SearchIcon />
            </span>
          </button>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="p-3 number-of-guests-form">
          <div className="mb-3 d-flex align-items-center">
            <p className="mb-0 me-auto">Adults</p>
            <button
              type="button"
              className="btn btn-primary decrease-button"
              onClick={() => handleChangeNumber("dec", "adults")}
              disabled={numberOfAdults <= 1}
            >
              <span>
                <RemoveIcon />
              </span>
            </button>
            <p className="mb-0 px-3">{numberOfAdults}</p>
            <button
              type="button"
              className="btn btn-primary increase-button"
              onClick={() => handleChangeNumber("inc", "adults")}
            >
              <span>
                <AddIcon />
              </span>
            </button>
          </div>
          <div className="d-flex  align-items-center">
            <p className="mb-0 me-auto">Children</p>
            <button
              type="button"
              className="btn btn-primary decrease-button"
              onClick={() => handleChangeNumber("dec", "children")}
              disabled={numberOfChildren <= 0}
            >
              <span>
                <RemoveIcon />
              </span>
            </button>
            <p className="mb-0 px-3">{numberOfChildren}</p>
            <button
              type="button"
              className="btn btn-primary increase-button"
              onClick={() => handleChangeNumber("inc", "children")}
            >
              <span>
                <AddIcon />
              </span>
            </button>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default SearchForm;
