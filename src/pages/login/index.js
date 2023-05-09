import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import { cookies, makeURL, set_cookie } from "src/Utils/common";
import references from "src/assets/References.json";
import LoginForm from "src/components/authentication/LoginForm";

export default function Login() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  function handleSubmit(values) {
    console.table(values);
    if (cookies.get("Authorization") != undefined) {
      setPopupMessage("Already logged in");
      setPopupIsOpen(true);
    } else {
      console.table(values);
      axios
        .post(makeURL(references.url_login), {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          setPopupMessage("login successfully");
          setPopupIsOpen(true);
          set_cookie(response.data.auth_token);
          window.location.replace("/");
        })
        .catch((error) => {
          if (error.response.status == 400) {
            setPopupMessage("wrong email or password");
            setPopupIsOpen(true);
          }
        });
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src="/img/icon.png" width={40} height={40} alt="Login Icon" />

        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Image src="/img/s4.png" width={300} height={300} alt="Login Image" />
        <LoginForm handleSubmit={handleSubmit} />
      </Box>
      <Snackbar
        open={popupIsOpen}
        autoHideDuration={2000}
        onClose={() => setPopupIsOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          severity={
            popupMessage === ("wrong email or password" || "Already logged in")
              ? "error"
              : "success"
          }
        >
          <Typography variant="body1">{popupMessage}</Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
}
