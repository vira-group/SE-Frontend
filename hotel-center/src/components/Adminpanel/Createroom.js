import * as React from "react";
import { TextField, Grid } from "@mui/material";
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
import moment from "moment";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  "Linen",
  "Upper floors accessible by elevator",
  "Wardrobe or closet",
  "Hand sanitiser",
  "Tea/Coffee maker",
  "Minibar",
  "Air conditioning",
  "Safety deposit box",
  "Soundproofing",
  "Ironing facilities",
  "Iron",
  "Interconnected room(s) available",
  "Heating",
  "Carpeted",
  "Laptop safe",
  "Carbon monoxide detector",
  "Electric kettle",
  "Desk",
  "TV",
  "Telephone",
  "Satellite channels",
  "Radio",
  "Cable channels",
  "Air purifiers",
  "Socket near the bed",
  "Wake up service/Alarm clock",
  "Wake-up service",
  "Pet rooms",
  "Children playground",
  "Hairdryer",
  "Slippers",
];

const validationSchema = yup.object({
  number: yup
    .string()
    .max(5, "Must be 5 digits or less")
    .min(1, "Must be at least 1 digit")
    .required("Required!"),
  type: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .min(10, "Must be at least 10 characters")
    .required("Required!"),
  size: yup.number().required("Required"),
  view: yup.string().required("Required!"),
  sleeps: yup
    .number()
    .max(5, "Can't be more than 5.")
    .min(1, "Must be 1 at least!")
    .required("Required!"),
  price: yup
    .number()
    .min(1, "Can't be 0.")
    .max(999999, "Not possible.")
    .required("Required!"),
});

function Createroom(props) {
  const [type, setType] = useState("");
  const [includebreakfast, setIncludebreakfast] = useState(null);
  const [value, setValue] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [t1, setT1] = useState("Single Classic Room");
  const [t2, setT2] = useState("Double King Room");
  const [t3, setT3] = useState("Family Room");
  const [t4, setT4] = useState("Junior Suite");
  const [t5, setT5] = useState("Luxury Suite");

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
      number: "",
      type: "",
      size: "",
      view: "",
      sleeps: "",
      price: "",
    },
    validationSchema: validationSchema,
  });

  const handletypeChange = (event) => {
    setType(event.target.value);
  };

  const handleIncludebreakfast = (event, newValue) => {
    setIncludebreakfast(newValue);
  };

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  const handleClick = () => {
    console.log("facilities: ", facilities);
  };

  return (
    <div className="container">
      <Container maxWidth="lg">
        <div className="container mt-4 p-4 edit-hotel-form border">
          <div className="row">
            <div className="mb-3 col-6">
              <div className="row mt-3">
                <div className="col-lg-3 col-md-4">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Room number
                  </label>
                </div>
                <div className="col-lg-8">
                  <ThemeProvider theme={textfieldTheme}>
                    <TextField
                      required
                      fullWidth
                      placeholder="101"
                      id="number"
                      size="small"
                      label="Room number"
                      InputLabelProps={{ shrink: true }}
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.number && Boolean(formik.errors.number)
                      }
                      helperText={formik.touched.number && formik.errors.number}
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>

            <div className="mb-3 col-6">
              <div className="row">
                <div className="col-lg-3 col-md-4 mt-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Type of room
                  </label>
                </div>
                <div className="col-lg-8">
                  <ThemeProvider theme={textfieldTheme}>
                    <FormControl fullWidth required>
                      <InputLabel id="demo-simple-select-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Type"
                        onChange={handletypeChange}
                      >
                        <MenuItem value={t1}>Single classic Room</MenuItem>
                        <MenuItem value={t2}>Double King Room</MenuItem>
                        <MenuItem value={t3}>Family Room</MenuItem>
                        <MenuItem value={t4}>Junior Suit</MenuItem>
                        <MenuItem value={t5}>Luxury Suite</MenuItem>
                      </Select>
                    </FormControl>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <label
                  for="exampleFormControlInput2"
                  className="ms-2 mt-1 form-label"
                >
                  Breakfast
                </label>
              </div>
              <div className="col-lg-8">
                <RadioGroup
                  row
                  aria-label="level"
                  name="row-radio-buttons-group"
                  value={includebreakfast}
                  onChange={handleIncludebreakfast}
                >
                  <FormControlLabel
                    value="Yes"
                    control={
                      <Radio
                        classes={{
                          root: c.root,
                          checked: c.checked,
                        }}
                      />
                    }
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={
                      <Radio
                        classes={{
                          root: c.root,
                          checked: c.checked,
                        }}
                      />
                    }
                    label="No"
                  />
                </RadioGroup>
              </div>
            </div>
          </div>

          <hr class="dashed"></hr>

          <div className="mb-3 col-12">
            <div className="row">
              <div className="mb-3 col-6">
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-4">
                    <label
                      for="exampleFormControlInput2"
                      className="ms-2 mt-1 form-label"
                    >
                      Room view
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <ThemeProvider theme={textfieldTheme}>
                      <TextField
                        required
                        fullWidth
                        placeholder="Sea"
                        id="view"
                        size="small"
                        label="Room view"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.view}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.view && Boolean(formik.errors.view)
                        }
                        helperText={formik.touched.view && formik.errors.view}
                      />
                    </ThemeProvider>
                  </div>
                </div>
              </div>

              <div className="mb-3 col-6">
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-4">
                    <label
                      for="exampleFormControlInput2"
                      className="ms-2 mt-1 form-label"
                    >
                      Room size
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <ThemeProvider theme={textfieldTheme}>
                      <TextField
                        required
                        fullWidth
                        placeholder="32"
                        id="size"
                        size="small"
                        label="Room size"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.size}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.size && Boolean(formik.errors.size)
                        }
                        helperText={formik.touched.size && formik.errors.size}
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
              <div className="mb-3 col-6">
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-4">
                    <label
                      for="exampleFormControlInput2"
                      className="ms-2 mt-1 form-label"
                    >
                      Room price
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <ThemeProvider theme={textfieldTheme}>
                      <TextField
                        required
                        fullWidth
                        placeholder="2000"
                        id="price"
                        size="small"
                        label="Room price"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.price && Boolean(formik.errors.price)
                        }
                        helperText={formik.touched.price && formik.errors.price}
                      />
                    </ThemeProvider>
                  </div>
                </div>
              </div>

              <div className="mb-3 col-6">
                <div className="row mt-3">
                  <div className="col-lg-3 col-md-4">
                    <label
                      for="exampleFormControlInput2"
                      className="ms-2 mt-1 form-label"
                    >
                      Room Sleeps
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <ThemeProvider theme={textfieldTheme}>
                      <TextField
                        required
                        fullWidth
                        placeholder="3"
                        id="sleeps"
                        size="small"
                        label="Room sleeps"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.sleeps}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.sleeps && Boolean(formik.errors.sleeps)
                        }
                        helperText={
                          formik.touched.sleeps && formik.errors.sleeps
                        }
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
              <div className="col-lg-2 col-md-3 mt-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="ms-2 form-label"
                >
                  Room facilities
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
                Create room
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Createroom;
