import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYxNDU5YjM0MjFkODQ4YTA0NmY2OTY5ODhkODdlNmI2NTlmMmUyNmFmZTcyMGIyOWFkMTcyMDFkNjZhZDM3OWIwNTkzMzQ5ZWQ3MjNlOWE4In0.eyJhdWQiOiIyMjUwOSIsImp0aSI6ImYxNDU5YjM0MjFkODQ4YTA0NmY2OTY5ODhkODdlNmI2NTlmMmUyNmFmZTcyMGIyOWFkMTcyMDFkNjZhZDM3OWIwNTkzMzQ5ZWQ3MjNlOWE4IiwiaWF0IjoxNjg1NTQ4OTAwLCJuYmYiOjE2ODU1NDg5MDAsImV4cCI6MTY4ODIyNzMwMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.sMX3SwJ5y126pEfX9Akw2c3Om_vNMKeXpECfT9aNtAVvHOrShgyo8PwfUOC3lVIP2o2nfp9oQBCXsMhLCnzoVxyIfRhhvRR2JefaLzW7hOZn8M_q6WoPLs8urpIsL-9DHm17VH6fa-PrZJdLIWnpxOiGjDzn75CPnSB2HpvERyEE8Ej2uXYde7RUWjBrEN_p5gkbazisHKfE_KhWshYIYZa2nn3YTHCe-g4JjjLSlc885HNWg31-Zqw2WT4FRRJTh1IDb2uWBcpkWICAo1wZiq5oIu_1U0cj9qVvownjqcoL5_vpBPUEig0eboYYwBLLiuYFk3V_33_E-7FEmQKeqQ", //Mapir access token
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

<Mapir Map={Map} />;

export default function NewHotelLocationSelectionDialog(props) {
  const { open, setOpen } = props;
  function handleClose() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onAbort={handleClose} onClose={handleClose}>
      <DialogTitle>Select hotel location</DialogTitle>
      <DialogContent>
        <div>Hotel location selection dialog</div>
      </DialogContent>
    </Dialog>
  );
}
