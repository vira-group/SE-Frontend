import * as React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress, Container, Autocomplete } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import PreviewMultipleImages from "./PreviewMultipleImages";

const textfieldTheme = createTheme({
  palette: {
    primary: {
      main: "#cd9a2b",
      dark: "#cd9a2b",
      light: "#d7ae55",
      contrastText: "#fff",
    },
  },
});

const facilitieslist = [
  "Taxi service",
  "Sofa",
  "Bathroom",
  "Telephone",
  "WiFi",
  "Room service",
  "Television",
  "Gym",
  "Restaurant",
  "Bar",
];

const validationSchema = yup.object({
  name: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  address: yup
    .string()
    .max(200, "Must be 200 characters or less")
    .min(7, "Must be at least 7 characters")
    .required("Required!"),
  email: yup.string().email("Invalid email address").required("Required"),
  phone: yup.number().required("Required!"),
  description: yup.string().max(500, "Can't be more than 500 characters."),
  morefacilities: yup.string().matches(/^[0-9a-zA-Z,]+$/, "Please enter your information correctly."),
});

function Edithotel(props) {
  const CHARACTER_LIMIT = 500;
  const [type, setType] = useState(null);
  const [value, setValue] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  let newfacilities = ""

  const styles = makeStyles(() => ({
    root: {
      "&$checked": {
        color: "#cd9a2d",
      },
    },
    checked: {},
  }));
  const c = styles();

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      description: "",
      morefacilities: "",
    },
    validationSchema: validationSchema,
  });

  const handletypeChange = (event, newValue) => {
    setType(newValue);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleClick = () => {
    console.log("facilities: ", facilities);
  };

  return (
    <div className="container">
      <Container maxWidth="lg">
        <div className="container mt-4 p-4 edit-hotel-form border">
          <div className="mb-3 col-12">
            <div className="row mt-3">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Name
                </label>
              </div>
              <div className="col-lg-9">
                <ThemeProvider theme={textfieldTheme}>
                  <TextField
                    required
                    fullWidth
                    placeholder="Something hotel"
                    id="name"
                    size="small"
                    label="Name"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row mt-3">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Header picture
                </label>
              </div>
              <div className="col-lg-9">
                <input
                  type="file"
                  name="myImage"
                  accept="image/*"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                />
                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="left">
                    <div>Image Preview:</div>
                    <img
                      className="company-logo"
                      src={imageUrl}
                      alt={selectedImage.name}
                      height="82px !important"
                      width="150px !important"
                    />
                  </Box>
                )}
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Address
                </label>
              </div>
              <div className="col-lg-9">
                <ThemeProvider theme={textfieldTheme}>
                  <TextField
                    required
                    fullWidth
                    placeholder="London, 22B Baker street"
                    id="address"
                    size="small"
                    label="Address"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Type
                </label>
              </div>
              <div className="col-lg-9">
                <RadioGroup
                  row
                  aria-label="level"
                  name="row-radio-buttons-group"
                  value={type}
                  onChange={handletypeChange}
                >
                  <FormControlLabel
                    value="Hotel"
                    control={
                      <Radio
                        classes={{
                          root: c.root,
                          checked: c.checked,
                        }}
                      />
                    }
                    label="Hotel"
                  />
                  <FormControlLabel
                    value="Villa"
                    control={
                      <Radio
                        classes={{
                          root: c.root,
                          checked: c.checked,
                        }}
                      />
                    }
                    label="Villa"
                  />
                  <FormControlLabel
                    value="House"
                    control={
                      <Radio
                        classes={{
                          root: c.root,
                          checked: c.checked,
                        }}
                      />
                    }
                    label="House"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Date range
                </label>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12 checkin-inp">
                      <ThemeProvider theme={textfieldTheme}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Checkin date"
                            value={checkin}
                            onChange={(newValue) => {
                              setCheckin(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                required
                                fullWidth
                                size="small"
                                variant="outlined"
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </ThemeProvider>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="col-lg-12 mt-2 mt-lg-0 checkout-inp">
                      <ThemeProvider theme={textfieldTheme}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Checkout date"
                            value={checkout}
                            onChange={(newValue) => {
                              setCheckout(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                required
                                fullWidth
                                size="small"
                                variant="outlined"
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </ThemeProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput3"
                  className="ms-2 mt-1 form-label"
                >
                  Phone number
                </label>
              </div>
              <div className="col-lg-9">
                <ThemeProvider theme={textfieldTheme}>
                  <TextField
                    required
                    fullWidth
                    placeholder="09912141869"
                    id="phone"
                    size="small"
                    label="Phone number"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlInput4"
                  className="ms-2 mt-1 form-label"
                >
                  Email
                </label>
              </div>
              <div className="col-lg-9">
                <ThemeProvider theme={textfieldTheme}>
                  <TextField
                    required
                    fullWidth
                    placeholder="yf7901@gamil.com"
                    id="email"
                    size="small"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="ms-2 form-label"
                >
                  Description
                </label>
              </div>
              <div className="col-lg-9">
                <ThemeProvider theme={textfieldTheme}>
                  <TextField
                    fullWidth
                    id="description"
                    placeholder=""
                    multiline
                    autoComplete="description"
                    label="Description"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: CHARACTER_LIMIT }}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={`${formik.values.description.length}/${CHARACTER_LIMIT}`}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-2 col-md-3 ">
                <label
                  for="exampleFormControlTextarea1"
                  className="ms-2 form-label"
                >
                  Facilities
                </label>
              </div>
              <div className="col-lg-9">
                <Autocomplete
                  multiple
                  id="facilities"
                  options={facilitieslist}
                  onChange={(event, value) => {
                    setFacilities(value);
                  }}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <ThemeProvider theme={textfieldTheme}>
                      <TextField
                        fullWidth
                        required
                        {...params}
                        label="Facilities"
                      />
                    </ThemeProvider>
                  )}
                />
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <PreviewMultipleImages />
          </div>

          <div className="row mt-2 d-fit-content">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4 edit-hotel mb-3">
              <button className="btn edit-hotel" onClick={handleClick}>
                Edit hotel
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Edithotel;
