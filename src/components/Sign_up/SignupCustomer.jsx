import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./style.css";
import { Sign_up_connection } from "../../Utils/connection";
import { useFormik } from "formik";

function SignupCustomer() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
    validate: function (values) {
      const errors = {};
      if (!values.email) {
        errors.email = "*Email field must not be empty!";
      } else if (
        !values.email.match(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        )
      ) {
        errors.email = "*Please enter a valid email.";
      }

      if (!values.password) {
        errors.password = "*Password field must not be empty";
      } else if (values.password.length < 8) {
        errors.password = "*Password length should be at least 8 characters.";
      } else if (!values.password.match(/^.*(?=.*[@#$%&]).*$/)) {
        errors.password =
          "*Password should contain at least one special character ( @, #, %, &,  $,).";
      } else if (!values.password.match(/^.*(?=.*[A-Z]).*$/)) {
        errors.password =
          "*Password should contain at least one uppercase letter(A-Z).";
      } else if (!values.password.match(/^.*(?=.*[a-z]).*$/)) {
        errors.password =
          "*Password should contain at least one lowercase letter(a-z).";
      } else if (!values.password.match(/^.*(?=.*\d).*$/)) {
        errors.password = "*Password should contain at least one digit(0-9). ";
      }

      if (!values.password_confirm) {
        errors.password_confirm = "*This field must not be empty!";
      } else if (values.password_confirm != values.password) {
        errors.password_confirm = "*Confirm password doesnt match!";
      }

      return errors;
    },
    onSubmit: function (values) {
      const is_registered = Sign_up_connection(values.email, values.password);

      if (is_registered) {
        window.location.replace("/verify-email");
      }
    },
  });

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2 }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className={
              formik.errors.email ? "is-invalid form-control" : "form-control"
            }
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Grid>
        <div>
          {formik.errors.email && (
            <p className="err">
              {formik.errors.email}
              <br />
            </p>
          )}
        </div>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            className={
              formik.errors.password
                ? "is-invalid form-control"
                : "form-control"
            }
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </Grid>
        <div>
          {formik.errors.password && (
            <p className="err">
              {formik.errors.password}
              <br />
            </p>
          )}
        </div>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password_confirm"
            label="Confirm Password"
            type="password"
            id="password_confirm"
            autoComplete="new-password"
            className={
              formik.errors.password_confirm
                ? "is-invalid form-control"
                : "form-control"
            }
            value={formik.values.password_confirm}
            onChange={formik.handleChange}
          />
        </Grid>
        <div>
          {formik.errors.password_confirm && (
            <p className="err">
              {formik.errors.password_confirm}
              <br />
            </p>
          )}
        </div>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        name="Sign Up"
        style={{
          mt: 2,
          mb: 2,
          backgroundColor: "black",
          color: "white",
          marginTop: "20px",
          height: "43px",
          marginBottom: "10px",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default SignupCustomer;
