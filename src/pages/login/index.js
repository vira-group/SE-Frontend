import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "src/components/authentication/LoginForm";
import login from "src/services/auth/login";

export default function LoginPage() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const router = useRouter();

  function handleSubmit(values) {
    login(values, router).catch((errorMessage) => {
      setPopupMessage(errorMessage);
      setPopupIsOpen(true);
    });
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
        <Alert variant="filled" severity="error">
          <Typography variant="body1">{popupMessage}</Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
}
