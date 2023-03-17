import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import pic from "./s3.png";
import SignupCustomer from "./SignupCustomer";
import { useState } from "react";
import { Button } from "@mui/material";
import SignupRoleSelection from "./SignupRoleSelection";
import Link from "@mui/material/Link";

function Signup() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Select Role",
    "Fill login information",
    "Receive activation Email",
  ];

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // width: "45vw",
          }}
        >
          <Avatar
            sx={{ m: 0.5, backgroundColor: "black", color: "white" }}
            className="icon"
          />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <img className="imgs" src={pic} />
          <Box
            sx={{
              height: "30vh",
            }}
          >
            {activeStep === 0 && <SignupRoleSelection />}
            {activeStep === 1 && <SignupCustomer />}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              width: "100%",
            }}
          >
            <Link
              to="./login"
              variant="body2"
              sx={{
                color: "black",
                mt: 2,
                mb: 3,
              }}
            >
              Already have an account? Sign in
            </Link>
            {activeStep > 0 && (
              <Button
                sx={{
                  height: "40px",
                }}
                variant="outlined"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
            {activeStep < steps.length - 1 && (
              <Button
                sx={{
                  height: "40px",
                  alignItem: "flex-end",
                  ml: "auto",
                }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
