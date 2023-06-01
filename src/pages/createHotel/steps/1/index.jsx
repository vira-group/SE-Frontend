import * as React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { cookies, makeURL } from "../../../../Utils/common";
import references from "../../../../assets/References.json";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneInput from "react-phone-input-2";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/router";
import NewHotelLocationSelectionDialog from "@/components/hotel_location/NewHotelLocationSelectionDialog";
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
  phone: yup.number().required("Required!"),
  description: yup.string().max(1000, "Can't be more than 1000 characters."),
  country: yup
    .string()
    .max(40, "Must be 40 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
  city: yup
    .string()
    .max(40, "Must be 40 characters or less")
    .min(2, "Must be at least 2 characters")
    .required("Required!"),
});

function CreateHotel() {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
  const [toggled, setToggled] = useState(false);
  const CHARACTER_LIMIT = 1000;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleSubmit() {
    axios
      .get(makeURL(references.url_me), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((res) => {
        let manager = res.data.id;
        console.log("manager:", res.data.id, res);
        return manager;
      })
      .then((manager) => {
        axios
          .post(
            makeURL(references.url_addhotel),
            {
              manager: manager,
              name: formik.values.name,
              address: formik.values.address,
              description: formik.values.description,
              phone_number: String(formik.values.phone),
              country: formik.values.country,
              city: formik.values.city,
            },
            {
              headers: {
                Authorization: cookies.get("Authorization"),
              },
            }
          )
          .then((res) => {
            setOpen(true);
            setLoading(false);
            console.table(formik.values);
            setMessage("Your hotel was submitted successfully!");
            console.log("hotelId:", res.data.id);
            router.push("/createHotel/steps/2/" + res.data.id);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setOpen(true);
            setMessage("We have a problem, try again later.");
          });
      })
      .catch((error) => {
        console.log("get ERROR:", error);
      });
  }

  function startDialog() {
    setOpenDialog(true);
  }

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
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="containter m-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card-body">
              <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="stepper-container-horizontal  ">
                  <div className="col"></div>
                  <div
                    className={`admin-panel ${toggled ? "toggled" : ""} d-flex`}
                    title="a1"
                  >
                    <div className="w-100" title="a2">
                      <div className="container py-5 px-lg-5" title="a3">
                        <h2 className="mb-4 fw-bold d-flex" title="a4">
                          <DomainAddIcon className="me-2" fontSize="large" />
                          Create Hotel
                        </h2>
                        <form
                          className="container mt-4 p-4 edit-hotel-form border"
                          title="a6"
                          onSubmit={formik.handleSubmit}
                        >
                          <div className="mb-3 col-12" title="a7">
                            <div className="row mt-3" title="a8">
                              <div className="col-lg-3" title="a9">
                                <label
                                  htmlFor="exampleFormControlInput2"
                                  className="ms-2 mt-1 form-label"
                                  title="f1"
                                >
                                  Name
                                </label>
                              </div>
                              <div className="col-lg-9" title="a10">
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
                                    error={
                                      formik.touched.name &&
                                      Boolean(formik.errors.name)
                                    }
                                    helperText={
                                      formik.touched.name && formik.errors.name
                                    }
                                  />
                                </ThemeProvider>
                              </div>
                            </div>
                          </div>
                          <hr className="dashed" title="a11" />
                          <div className="mb-3 col-12">
                            <div className="row">
                              <div className="col-lg-3">
                                <label
                                  htmlFor="exampleFormControlInput2"
                                  className="ms-2 mt-1 form-label"
                                  title="f4"
                                >
                                  Country & City
                                </label>
                              </div>

                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-lg-6" title="a19">
                                    <ThemeProvider theme={textfieldTheme}>
                                      <div className="div">
                                        <div className="col-lg-12">
                                          <CountryDropdown
                                            style={{
                                              color: "#555",
                                              border: "1px solid #555",
                                            }}
                                            className={" form-control    "}
                                            required
                                            placeholder="USA"
                                            id="country"
                                            size="small"
                                            label="County"
                                            value={formik.values.country}
                                            onChange={formik.handleChange(
                                              "country"
                                            )}
                                          />
                                        </div>
                                        <br />
                                        <div className="col-lg-12">
                                          {" "}
                                          <RegionDropdown
                                            style={{
                                              color: "#555",
                                              border: "1px solid #555",
                                            }}
                                            className={" form-control "}
                                            country={formik.values.country}
                                            required
                                            placeholder="New York"
                                            id="city"
                                            size="small"
                                            label="City"
                                            value={formik.values.city}
                                            onChange={formik.handleChange(
                                              "city"
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </ThemeProvider>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <Button
                                  onClick={startDialog}
                                  variant="contained"
                                >
                                  Add Location
                                </Button>
                              </div>
                            </div>
                          </div>
                          <hr className="dashed" />
                          <div className="mb-3 col-12">
                            <div className="row">
                              <div className="col-lg-3">
                                <label
                                  htmlFor="exampleFormControlInput2"
                                  className="ms-2 mt-1 form-label"
                                  title="f3"
                                >
                                  Address
                                </label>
                              </div>
                              <div className="col-lg-9" title="a18">
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
                                      formik.touched.address &&
                                      Boolean(formik.errors.address)
                                    }
                                    helperText={
                                      formik.touched.address &&
                                      formik.errors.address
                                    }
                                  />
                                </ThemeProvider>
                              </div>
                            </div>
                          </div>
                          <hr className="dashed" />
                          <div className="mb-3 col-12">
                            <div className="row">
                              <div className="col-lg-3">
                                <label
                                  htmlFor="exampleFormControlInput3"
                                  className="ms-2 mt-1 form-label"
                                  title="f7"
                                >
                                  Phone number
                                </label>
                              </div>
                              <div
                                className="col-lg-9"
                                style={{ width: "100" }}
                              >
                                <ThemeProvider theme={textfieldTheme}>
                                  <PhoneInput
                                    country={"ir"}
                                    placeholder="09912141869"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange("phone")}
                                    onBlur={formik.handleBlur}
                                  />
                                </ThemeProvider>
                              </div>
                            </div>
                          </div>
                          <hr className="dashed" />
                          <div className="mb-3 col-12">
                            <div className="row" title="f5">
                              <div className="col-lg-3">
                                <label
                                  htmlFor="exampleFormControlTextarea1"
                                  className="ms-2 form-label"
                                  title="f9"
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
                          <Snackbar
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Alert
                              onClose={handleClose}
                              severity={
                                message === "Please fill in the blanks."
                                  ? "error"
                                  : "success"
                              }
                              sx={{ width: "100%" }}
                            >
                              {message}
                            </Alert>
                          </Snackbar>{" "}
                          <div className="row mt-2 d-fit-content">
                            <div className="col-4" />
                            <div className="col-4" />
                            <div className="col-4 edit-hotel mb-3">
                              <Button
                                disabled={!(formik.isValid && formik.dirty)}
                                variant="contained"
                                type="submit"
                              >
                                {loading ? (
                                  <CircularProgress size="1.5rem" />
                                ) : (
                                  "Create Hotel"
                                )}{" "}
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewHotelLocationSelectionDialog
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </>
  );
}

export default CreateHotel;
