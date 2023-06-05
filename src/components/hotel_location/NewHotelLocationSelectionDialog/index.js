import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import { useState } from "react";
import { useEffect } from "react";

export default function NewHotelLocationSelectionDialog(props) {
  const { open, setOpen, center, onChange } = props;

  const [ol, setOl] = useState(null);
  const [olMap, setOlMap] = useState(null);

  const onInit = (ol, map) => {
    setOl(ol);
    setOlMap(map);
  };
  useEffect(() => {
    if (center.longitude === null || center.latitude === null) {
      onChange("longitude")({
        target: {
          value: 35.7665394,
        },
      });
      onChange("latitude")({
        target: {
          value: 51.4749824,
        },
      });
    } else if (olMap !== null) {
      olMap
        .getView()
        .setCenter(ol.proj.fromLonLat([center.longitude, center.latitude]));
    }
    console.table(center);
    console.log(center.longitude, center.latitude);
  }, [center.longitude, center.latitude, open]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onAbort={handleClose}
      onClose={handleClose}
      maxWidth="lg"
    >
      <DialogTitle>Select hotel location</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            width: "80vw",
            height: "80vh",
          }}
        >
          <NeshanMap
            mapKey="web.ec47b949ed89449085f47042eb04a8a6"
            serviceKey="service.cefc55fca88945e298665cd1f6230315"
            onInit={onInit}
            zoom={14}
          ></NeshanMap>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
