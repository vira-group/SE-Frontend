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
import moment from "moment";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PreviewMultipleImages from "./PreviewMultipleImages";
import Sidebar from "../layout/Sidebar";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { fontSize } from "@mui/system";

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
    .matches(/^[0-9,]+$/, "Please enter your information correctly.")
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
  morefacilities: yup
    .string()
    .matches(/^[0-9a-zA-Z,]+$/, "Please enter your information correctly."),
});

function Createroom(props) {
  const [toggled, setToggled] = useState(false);
  const [hotelId, setHotelId] = useState(null);
  const [type, setType] = useState("");
  const [includebreakfast, setIncludebreakfast] = useState(null);
  const [value, setValue] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [roomid, setRoomid] = useState(null);
  const t1 = "singleRoom";
  const t2 = "doubleRoom";
  const t3 = "tripleRoom";
  const t4 = "suiteRoom";

  useEffect(() => {
    setHotelId(parseInt(window.location.pathname.split("/")[2], 10));
  }, []);

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
      size: "",
      view: "",
      sleeps: "",
      price: "",
      morefacilities: "",
    },
    validationSchema: validationSchema,
  });

  const handletypeChange = (event) => {
    setType(event.target.value);
    // console.log(event.target.value);
  };

  const handleIncludebreakfast = (event, newValue) => {
    setIncludebreakfast(newValue);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  const handleClick = () => {
    let hotelid = window.location.pathname.split("/")[2];
    let option = "";
    includebreakfast === "Yes" ? (option = "Breakfast") : (option = "");
    // console.log("type: ", type);
    // console.log(formik.values.price,"\n", formik.values.size,"\n", formik.values.sleeps,
    // "\n",type,"\n", formik.values.view,"\n", formik.values.morefacilities,"\n", option,
    // "\n",facilities);
    var allfacilities = [];
    allfacilities = facilities.concat(formik.values.morefacilities.split(","));
    // console.log("all facilities final: ",allfacilities);
    var listForBack = [];
    for (var i = 0; i < allfacilities.length; i++) {
      let temp = { name: allfacilities[i] };
      listForBack.push(temp);
    }
    console.log("result: ", listForBack);

    axios
      .post(
        makeURL(references.url_hotelrooms + hotelid + "/"),
        {
          type: type,
          size: formik.values.size,
          view: formik.values.view,
          sleeps: formik.values.sleeps,
          price: formik.values.price,
          option: option,
          room_facilities: listForBack,
        },
        {
          headers: {
            Authorization: cookies.get("Authorization"),
          },
        }
      )
      .then((res) => {
        console.log("response for createroom page: ", res.data);
        setRoomid(res.data.id);
      })
      .catch((err) => {
        console.log("error for createroom page: ", err);
      });
  };

  const handleRoomSpaceClick = () => {
    var roomSpaces = [];
    var myarr = formik.values.number.split(",");
    for (var j = 0; j < myarr.length; j++) {
      let temp1 = { name: myarr[j] };
      roomSpaces.push(temp1);
    }
    console.log("roomspaces: ", roomSpaces);
    if (roomid) {
      axios
        .post(
          makeURL(references.url_hotelrooms + roomid + "/spaces/"),
          { names: roomSpaces },
          {
            headers: {
              Authorization: cookies.get("Authorization"),
            },
          }
        )
        .then((res) => {
          console.log("response for adding room space: ", res.data);
        })
        .catch((err) => {
          console.log("error for adding room space: ", err);
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
            <DomainAddIcon className="me-2" fontSize="large" />
            Create Room
          </h2>
          <div className="container mt-4 p-4 edit-hotel-form border">
            <div className="mb-3 col-md-12">
              <div className="row">
                <div className="col-lg-2 col-md-3 mt-lg-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Type of room
                  </label>
                </div>
                <div className="col-lg-9 mt-lg-3">
                  <ThemeProvider theme={textfieldTheme}>
                    <FormControl fullWidth required>
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ textAlign: "center" }}
                      >
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder=""
                        value={type}
                        label="Type"
                        onChange={handletypeChange}
                      >
                        <MenuItem value={t1}>Single room</MenuItem>
                        <MenuItem value={t2}>Double room</MenuItem>
                        <MenuItem value={t3}>Triple room</MenuItem>
                        <MenuItem value={t4}>Suit room</MenuItem>
                      </Select>
                    </FormControl>
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
                    Breakfast
                  </label>
                </div>
                <div className="col-lg-9">
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
                          helperText={
                            formik.touched.price && formik.errors.price
                          }
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
                        Room sleeps
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
                            formik.touched.sleeps &&
                            Boolean(formik.errors.sleeps)
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

                  <br />

                  <Typography sx={{ mb: 3 }}>
                    Not listed above? please add it below.
                  </Typography>
                  <ThemeProvider theme={textfieldTheme}>
                    <TextField
                      fullWidth
                      placeholder=""
                      id="morefacilities"
                      size="small"
                      label="Extra facilities"
                      InputLabelProps={{ shrink: true }}
                      value={formik.values.morefacilities}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.morefacilities &&
                        Boolean(formik.errors.morefacilities)
                      }
                      helperText="please seperate each facility with a comma. i.e Pool, Bar"
                    />
                  </ThemeProvider>
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

            <hr class="dashed"></hr>

            <div className="mb-3 col-md-12">
              <div className="row mt-3">
                <Typography sx={{ mb: 3 }}>
                  Please first create your room and then add the numbers of rooms you have below.
                </Typography>
                <div className="col-lg-2 col-md-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Room spaces
                  </label>
                </div>
                <div className="col-lg-9">
                  <ThemeProvider theme={textfieldTheme}>
                    <TextField
                      required
                      fullWidth
                      placeholder="101,102,103"
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
                      helperText={
                        "Please seperate each room number with a comma. i,e 101,102"
                      }
                    />
                  </ThemeProvider>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4"></div>
              <div className="col-4 edit-hotel mb-3">
                <button
                  className="btn edit-hotel"
                  onClick={handleRoomSpaceClick}
                >
                  Add room spaces
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createroom;
