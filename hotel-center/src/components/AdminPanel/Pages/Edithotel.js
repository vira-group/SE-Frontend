import * as React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import Logo from "../../../statics/logo/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../../Utils/common";
import references from "../../../assets/References.json";
import { Box, CircularProgress, Container, Autocomplete } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import PreviewMultipleImages from "./PreviewMultipleImages";
import Sidebar from "../layout/Sidebar";
import EditIcon from "@mui/icons-material/Edit";

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
    .max(30, "Must be 15 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  address: yup
    .string()
    .max(200, "Must be 200 characters or less")
    .min(7, "Must be at least 7 characters")
    .required("Required!"),
  email: yup.string().email("Invalid email address").required("Required"),
  phone: yup.number().required("Required!"),
  description: yup.string().max(1000, "Can't be more than 500 characters."),
  country: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  city: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
});

function Edithotel(props) {
  const [toggled, setToggled] = useState(false);
  const [hotelId, setHotelId] = useState(null);
  const CHARACTER_LIMIT = 1000;
  // const [type, setType] = useState(null);
  const [value, setValue] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  let tempcheckin = checkin; // value from your state
  let tempcheckout = checkout; // value from your state
  let formattedcheckinDate = moment(tempcheckin).format("hh:mm");
  let formattedcheckoutDate = moment(tempcheckout).format("hh:mm");

  const styles = makeStyles(() => ({
    root: {
      "&$checked": {
        color: "#cd9a2d",
      },
    },
    checked: {},
  }));
  const c = styles();

  useEffect(() => {
    setHotelId(parseInt(window.location.pathname.split("/")[2], 10));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      description: "",
      country: "",
      city: "",
    },
    validationSchema: validationSchema,
  });

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  // const handletypeChange = (event, newValue) => {
  //   setType(newValue);
  // };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  let hotelid = window.location.pathname.split("/")[2];

  useEffect(() => {
    let facilityarray = [];
    console.log(hotelid);
    axios
      .get(makeURL(references.url_one_hotel + hotelid + "/"), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((res) => {
        setValue(res.data);
        console.log(res.data);
        formik.setValues({
          name: res.data.name || "",
          address: res.data.address || "",
          description: res.data.description || "",
          phone: res.data.phone_numbers || "",
          country: res.data.country || "",
          city: res.data.city || "",
        });
        for (var i = 0; i < res.data.facilities.length; i++) {
          facilityarray.push(res.data.facilities[i].name);
        }
        setFacilities(facilityarray || "");
        var temp1 = res.data.check_in_range.split(":");
        var temp2 = res.data.check_out_range.split(":");
        setCheckin(
          new Date(2022, 5, 29, parseInt(temp1[0]), parseInt(temp1[1])) || ""
        );
        setCheckout(
          new Date(2022, 5, 29, parseInt(temp2[0]), parseInt(temp2[1])) ||
            "" ||
            ""
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = () => {
    let filled =
      !Boolean(formik.errors.name) &&
      !Boolean(formik.errors.address) &&
      !Boolean(formik.errors.description) &&
      !Boolean(formik.errors.phone) &&
      !Boolean(formik.errors.country) &&
      !Boolean(formik.errors.city) &&
      // facilities.length != 0 &&
      formattedcheckinDate != "Invalid time" &&
      formattedcheckoutDate != "Invalid time";
    console.log("filled: ", filled);
    console.log(
      "informations validation: ",
      !Boolean(formik.errors.name),
      "\n",
      !Boolean(formik.errors.address),
      "\n",
      !Boolean(formik.errors.description),
      "\n",
      !Boolean(formik.errors.phone),
      "\n",
      facilities.length,
      "\n",
      formattedcheckinDate,
      "\n",
      formattedcheckoutDate,
      "\n",
      !Boolean(formik.errors.name) &&
        !Boolean(formik.errors.address) &&
        !Boolean(formik.errors.description) &&
        !Boolean(formik.errors.phone) &&
        // facilities.length != 0 &&
        formattedcheckinDate != " Invalid date" &&
        formattedcheckoutDate != " Invalid date"
    );
    console.log("checkin time: ", formattedcheckinDate);
    console.log("checkout time: ", formattedcheckoutDate);

    var facilitiesListForBack = [];
    for (var i = 0; i < facilities.length; i++) {
      let temp = { name: facilities[i] };
      facilitiesListForBack.push(temp);
    }
    console.log("facilities list: ", facilitiesListForBack);

    if (filled) {
      // let form_data = new FormData();
      // form_data.append("name", formik.values.name);
      // form_data.append("address", formik.values.address);
      // form_data.append("description", formik.values.description);
      // form_data.append("facilities", facilities);
      // form_data.append("phone_number", formik.values.phone);
      // form_data.append("country", formik.values.country);
      // form_data.append("city", formik.values.city);
      // form_data.append("header", selectedImage, selectedImage.name);
      // form_data.append("check_in_range",formattedcheckinDate);
      // form_data.append("check_out_range",formattedcheckoutDate);
      // form_data.append("facilities",facilitiesListForBack);

      axios
        .put(
          makeURL(references.url_one_hotel + hotelid + "/"),
          {
            name: formik.values.name,
            address: formik.values.address,
            description: formik.values.description,
            facilities: facilitiesListForBack,
            phone_number: formik.values.phone,
            country: formik.values.country,
            city: formik.values.city,
            check_in_range: formattedcheckinDate,
            check_out_range: formattedcheckoutDate,
          },
          {
            headers: {
              Authorization: cookies.get("Authorization"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={`admin-panel ${toggled ? "toggled" : ""} d-flex`}>
      <Sidebar
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        id={hotelId}
      />
      <div className="w-100 admin-content">
        <div className="adminpanel-header-mobile">
          <a href="/" className="navbar-brand logo d-md-none">
            <img src={Logo} alt="Hotel Center" />
            <span className="fw-bold logo-text-font">Hotel Center</span>
          </a>
          <div
            className="btn-toggle d-md-none"
            onClick={() => handleToggleSidebar(true)}
          >
            <MenuIcon fontSize="large" />
          </div>
        </div>
        <div className="container py-5 px-lg-5">
          <h2 className="mb-4 fw-bold d-flex">
            <EditIcon className="me-2" fontSize="large" />
            Edit Hotel
          </h2>
          <div className="container mt-4 p-4 edit-hotel-form border">
            <div className="mb-3 col-12">
              <div className="row mt-3">
                <div className="col-lg-2 col-md-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                    title="e1"
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
                    title="e2"
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
                    title="e3"
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
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            {/* <div className="mb-3 col-12">
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

            <hr class="dashed"></hr> */}

            <div className="mb-3 col-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <label
                        for="exampleFormControlInput2"
                        className="ms-2 mt-1 form-label"
                        title="e4"
                      >
                        Country
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <ThemeProvider theme={textfieldTheme}>
                        <TextField
                          required
                          fullWidth
                          placeholder="USA"
                          id="country"
                          size="small"
                          label="County"
                          InputLabelProps={{ shrink: true }}
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.country &&
                            Boolean(formik.errors.country)
                          }
                          helperText={
                            formik.touched.country && formik.errors.country
                          }
                        />
                      </ThemeProvider>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-2 col-md-3">
                      <label
                        for="exampleFormControlInput2"
                        className="mt-1 form-label"
                        title="e5"
                      >
                        City
                      </label>
                    </div>
                    <div className="col-lg-8">
                      <ThemeProvider theme={textfieldTheme}>
                        <TextField
                          required
                          fullWidth
                          placeholder="New York"
                          id="city"
                          size="small"
                          label="City"
                          InputLabelProps={{ shrink: true }}
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.city && Boolean(formik.errors.city)
                          }
                          helperText={formik.touched.city && formik.errors.city}
                        />
                      </ThemeProvider>
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
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                    title="e6"
                  >
                    Time range
                  </label>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="col-lg-12 checkin-inp">
                        <ThemeProvider theme={textfieldTheme}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                              label="Checkin time"
                              ampm={false}
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
                            <TimePicker
                              label="Checkout time"
                              ampm={false}
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
                    title="e7"
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
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
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
                    title="e8"
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
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
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
                    title="e9"
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
                    title="e10"
                  >
                    Facilities
                  </label>
                </div>
                <div className="col-lg-9">
                  <Autocomplete
                    multiple
                    id="facilities"
                    value={facilities}
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
        </div>
      </div>
    </div>
  );
}

export default Edithotel;
