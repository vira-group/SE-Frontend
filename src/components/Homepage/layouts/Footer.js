import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Divider sx={{ mt: 8 }} />
      <Box
        fullWidth
        p={4}
        sx={{ bottom: "0", gap: 16, display: "flex", justifyContent: "center" }}
      >
        <Typography variant="body2">FAQ</Typography>
        <Typography variant="body2">Terms of Service</Typography>
        <Typography variant="body2">Privacy</Typography>
        <Typography variant="body2">Newsletter</Typography>
        <Typography variant="body2">About HotelCenter</Typography>
        <Typography variant="body2">Contant Us</Typography>
      </Box>
    </>
  );
}
