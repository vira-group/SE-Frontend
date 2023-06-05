import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function NewHotelLocationSelectionDialog(props) {
  const [center, setCenter] = useState({
    latitude: null,
    longitude: null,
  });
  const { open, setOpen, changeCenter } = props;

  const olMapRef = useRef(null);
  const [ol, setOl] = useState(null);
  const markerRef = useRef(null);
  const startPointRef = useRef(null);

  const onInit = (ol, map) => {
    olMapRef.current = map;
    setOl(ol);

    const marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([51.338076, 35.699756])),
    });

    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [marker],
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          color: "#BADA55",
          crossOrigin: "anonymous",
          src: "/img/location.svg",
        }),
      }),
    });

    const handleMapDragStart = (event) => {
      if (ol !== null) {
        const map = olMapRef.current;
        const pixel = map.getEventPixel(event);
        startPointRef.current = [...pixel];
      }
    };

    const handleMapDragEnd = (event) => {
      if (ol !== null) {
        const map = olMapRef.current;
        const pixel = map.getEventPixel(event);
        const startPoint = startPointRef.current;
        const distance = Math.sqrt(
          Math.pow(pixel[0] - startPoint[0], 2) +
          Math.pow(pixel[1] - startPoint[1], 2)
        );

        if (distance < 1) {
          const marker = markerRef.current;
          const coordinates = map.getCoordinateFromPixel(pixel);
          marker.setGeometry(new ol.geom.Point(coordinates));
        }
      }
    };

    markerRef.current = marker;
    map.addLayer(layer);

    map.getViewport().addEventListener("pointerdown", handleMapDragStart);
    map.getViewport().addEventListener("pointerup", handleMapDragEnd);
  };
  useEffect(() => {
    if (center.longitude === null || center.latitude === null) {
      changeCenter(35.7665394, 51.4749824);
    } else if (olMapRef.current !== null && markerRef.current !== null) {
      const marker = markerRef.current;
      const coordinates = ol.proj.fromLonLat([
        center.longitude,
        center.latitude,
      ]);
      marker.setGeometry(new ol.geom.Point(coordinates));
      olMapRef.current.getView().setCenter(coordinates);
    }
  }, [center, olMapRef.current]);

  const handleClose = () => {
    setOpen(false);
    startPointRef.current = null;
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
            center={{
              latitude: center.latitude || 35.699756,
              longitude: center.longitude || 51.338076,
            }}
            onInit={onInit}
            zoom={14}
          ></NeshanMap>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
