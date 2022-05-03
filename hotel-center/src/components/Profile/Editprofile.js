import * as React from "react";
import { TextField, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { cookies, makeURL, set_cookie } from "../../Utils/common";
import references from "../../assets/References.json";
import { Box, CircularProgress } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import "../../css/Profile.css";
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

const datePickerTheme = createTheme({
  palette: {
    primary: {
      main: "#cd9a2b",
      dark: "#cd9a2b",
      light: "#d7ae55",
      contrastText: "#fff",
    },
  },
});

const validationSchema = yup.object({
  firstname: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  lastname: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  nationalcode: yup.string().required("Required!"),
  email: yup.string().email("Invalid email address").required("Required"),
  phone: yup.number().required("Required!"),
  aboutme: yup.string().max(250, "Can't be more than 250 characters."),
  telephone: yup.number(),
  gender: yup.string().required("Required!"),
  birthdate: yup.date().required("Required!"),
});

export default function Profile() {
  const CHARACTER_LIMIT = 250;
  const [genValue, setGenValue] = useState("Male");
  const [birthdate, setBirthdate] = useState(null);
  const [state, setState] = useState(null);
  let date = birthdate; // value from your state
  let formattedDate = moment(date).format("YYYY-MM-DD");
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      nationalcode: "",
      email: "",
      phone: "",
      aboutme: "",
      telephone: "",
      gender: "",
      birthdate: "",
    },
    validationSchema: validationSchema,
  });

  const genhandleChange = (event, newValue) => {
    setGenValue(newValue);
  };

  useEffect(() => {
    axios
      .get(makeURL(references.url_edit_profile), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((res) => {
        // console.log('response of profile: ',res.data);
        setState(res.data);
        formik.setValues({
          firstname: res.data.firstName || '',
          lastname: res.data.lastName || '',
          nationalcode: res.data.national_code || '',
          email: res.data.email || '',
          phone: res.data.phone_number || '',
          aboutme: res.data.description || '',
          telephone: "",
        });
        setBirthdate(res.data.birthday || '');
        setGenValue(res.data.gender || '')
      });
  }, []);

  const handleClick = () => {
    let filled =
      !Boolean(formik.errors.firstname) &&
      !Boolean(formik.errors.lastname) &&
      !Boolean(formik.errors.nationalcode) &&
      !Boolean(formik.errors.email) &&
      !Boolean(formik.errors.phone) &&
      genValue.length != 0 &&
      formattedDate != "Invalid date";
    console.log("filled:", filled);

    if (filled) {
      axios
        .put(
          makeURL(references.url_edit_profile),
          {
            email: formik.values.email,
            avatar: null,
            firstName: formik.values.firstname,
            lastName: formik.values.lastname,
            birthday: formattedDate,
            gender: genValue,
            phone_number: formik.values.phone,
            national_code: formik.values.nationalcode,
            description: formik.values.aboutme,
          },
          {
            headers: {
              Authorization: cookies.get("Authorization"),
            },
          }
        )
        .then((response) => {
          console.log("status code: ", response.status);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }

    console.log(
      formik.values.firstname,
      formik.values.lastname,
      formik.values.nationalcode,
      genValue,
      formattedDate,
      formik.values.email,
      formik.values.phone,
      formik.values.aboutme,
      formik.values.telephone
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <h5 className="ms-4 mt-5">Account</h5>
          <div className="container edit-profile-form mt-3">
            <div className="row">
              <div className="col-lg-3">
                <div className="profile-img">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="col-lg-8" style={{ marginTop: "52px" }}>
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  Edit profile photo
                </p>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput1"
                    className="ms-2 mt-1 form-label"
                  >
                    Full name
                  </label>
                </div>
                <div className="col-lg-8">
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        required
                        placeholder="Eric"
                        id="firstname"
                        size="small"
                        label="First name"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstname &&
                          Boolean(formik.errors.firstname)
                        }
                        helperText={
                          formik.touched.firstname && formik.errors.firstname
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        placeholder="Hodson"
                        id="lastname"
                        size="small"
                        label="Last name"
                        InputLabelProps={{ shrink: true }}
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lastname &&
                          Boolean(formik.errors.lastname)
                        }
                        helperText={
                          formik.touched.lastname && formik.errors.lastname
                        }
                      />
                    </Grid>
                  </Grid>

                  {/* <input
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    // value={formik.values.fullname}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                    // helperText={formik.touched.fullname && formik.errors.fullname}
                  ></input> */}
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    National code
                  </label>
                </div>
                <div className="col-lg-8">
                  <TextField
                    required
                    fullWidth
                    placeholder="0023839813"
                    id="nationalcode"
                    size="small"
                    label="National code"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.nationalcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.nationalcode &&
                      Boolean(formik.errors.nationalcode)
                    }
                    helperText={
                      formik.touched.nationalcode && formik.errors.nationalcode
                    }
                  />
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput2"
                    className="ms-2 mt-1 form-label"
                  >
                    Gender
                  </label>
                </div>
                <div className="col-lg-9">
                  <RadioGroup
                    row
                    aria-label="level"
                    name="row-radio-buttons-group"
                    value={genValue}
                    onChange={genhandleChange}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3 ms-2">
                  <label for="date" className="col-1 col-form-label">
                    Birthday
                  </label>
                </div>
                <div className="col-lg-8 birthday-inp">
                  <ThemeProvider theme={datePickerTheme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Birthdate"
                        value={birthdate}
                        onChange={(newValue) => {
                          setBirthdate(newValue);
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

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput3"
                    className="ms-2 mt-1 form-label"
                  >
                    Phone number
                  </label>
                </div>
                <div className="col-lg-8">
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
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput4"
                    className="ms-2 mt-1 form-label"
                  >
                    Email address
                  </label>
                </div>
                <div className="col-lg-8">
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
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlInput5"
                    className="ms-2 mt-1 form-label"
                  >
                    Telephone
                  </label>
                </div>
                <div className="col-lg-8">
                  <TextField
                    fullWidth
                    placeholder="02632552012"
                    id="telephone"
                    size="small"
                    label="Telephone"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.telephone &&
                      Boolean(formik.errors.telephone)
                    }
                    helperText={
                      formik.touched.telephone && formik.errors.telephone
                    }
                  />
                </div>
              </div>
            </div>

            <hr class="dashed"></hr>

            <div className="mb-3 col-9">
              <div className="row">
                <div className="col-lg-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="ms-2 form-label"
                  >
                    About me
                  </label>
                </div>
                <div className="col-lg-8">
                  <TextField
                    fullWidth
                    id="aboutme"
                    placeholder=""
                    multiline
                    autoComplete="aboutme"
                    label="About me"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ maxLength: CHARACTER_LIMIT }}
                    value={formik.values.aboutme}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.aboutme && Boolean(formik.errors.aboutme)
                    }
                    helperText={`${formik.values.aboutme.length}/${CHARACTER_LIMIT}`}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-2 d-fit-content">
              <div className="col-4"></div>
              <div className="col-4"></div>
              <div className="col-4 edit-pro-btn">
                <button
                  className="btn btn-primary edit-hotel"
                  onClick={handleClick}
                >
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
