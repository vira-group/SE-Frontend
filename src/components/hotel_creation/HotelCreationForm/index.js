import NewHotelLocationSelectionDialog from "@/components/hotel_location/NewHotelLocationSelectionDialog";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import * as yup from "yup";

export default function HotelCreationForm(props) {
  const CHARACTER_LIMIT = 1000;
  const [openDialog, setOpenDialog] = useState(false);
  function startDialog() {
    setOpenDialog(true);
  }
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
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      description: "",
      country: "",
      city: "",
      longitude: null,
      latitude: null,
    },
    validationSchema: validationSchema,
    onSubmit: props.handleSubmit,
  });
  useEffect(() => {
    if (formik.touched.country) {
      formik.setValues({ ...formik.values, city: "" });
    }
  }, [formik.values.country]);
  const enableLocation =
    formik.values.country !== "" && formik.values.city !== "";
  const changeCenter = ({ longitude, latitude }) => {
    formik.setValues({
      ...formik.values,
      longitude: longitude,
      latitude: latitude,
    });
  };
  const hasLocation =
    formik.values.longitude !== null && formik.values.latitude !== null;
  return (
    <>
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
                <div className="col-lg-12" title="a19">
                  <div className="div">
                    <div className="col-lg-12">
                      <CountryDropdown
                        className={"form-control"}
                        required
                        placeholder="USA"
                        id="country"
                        size="small"
                        label="County"
                        value={formik.values.country}
                        onChange={formik.handleChange("country")}
                      />
                    </div>
                    <br />
                    <div className="col-lg-12">
                      {" "}
                      <RegionDropdown
                        className={"form-control"}
                        country={formik.values.country}
                        required
                        placeholder="New York"
                        id="city"
                        size="small"
                        label="City"
                        value={formik.values.city}
                        onChange={formik.handleChange("city")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="div">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Button
                      disabled={!enableLocation}
                      onClick={startDialog}
                      variant="contained"
                    >
                      {hasLocation ? "Change Location" : "Add Location"}
                    </Button>
                    {!hasLocation && (
                      <Typography variant="h6">No location selected</Typography>
                    )}
                  </Box>
                </div>
              </div>
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
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
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
            <div className="col-lg-9" style={{ width: "100" }}>
              <PhoneInput
                country={"ir"}
                placeholder="09912141869"
                value={formik.values.phone}
                onChange={formik.handleChange("phone")}
                onBlur={formik.handleBlur}
              />
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
            </div>
          </div>
        </div>
        <div className="row mt-2 d-fit-content">
          <div className="col-4" />
          <div className="col-4" />
          <div className="col-4 edit-hotel mb-3">
            <Button
              disabled={!(formik.isValid && formik.dirty)}
              variant="contained"
              type="submit"
            >
              {props.loading ? (
                <CircularProgress size="1.5rem" />
              ) : (
                "Create Hotel"
              )}{" "}
            </Button>
          </div>
        </div>
      </form>

      <NewHotelLocationSelectionDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onChange={changeCenter}
        value={{
          latitude: formik.values.latitude,
          longitude: formik.values.longitude,
        }}
      />
    </>
  );
}
