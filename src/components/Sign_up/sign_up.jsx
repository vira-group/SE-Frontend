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

function Signup() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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

          <SignupCustomer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
