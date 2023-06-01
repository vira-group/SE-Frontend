import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { cookies, makeURL } from "../../../../Utils/common";
import references from "../../../../assets/References.json";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/router";
import HotelCreationForm from "@/components/hotel_creation/HotelCreationForm";
import Snackbar from "@mui/material/Snackbar";

function CreateHotel() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
  const [toggled, setToggled] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleSubmit(values) {
    axios
      .get(makeURL(references.url_me), {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
      })
      .then((res) => {
        let manager = res.data.id;
        console.log("manager:", res.data.id, res);
        return manager;
      })
      .then((manager) => {
        axios
          .post(
            makeURL(references.url_addhotel),
            {
              manager: manager,
              name: values.name,
              address: values.address,
              description: values.description,
              phone_number: String(values.phone),
              country: values.country,
              city: values.city,
            },
            {
              headers: {
                Authorization: cookies.get("Authorization"),
              },
            }
          )
          .then((res) => {
            setOpen(true);
            setLoading(false);
            setMessage("Your hotel was submitted successfully!");
            router.push("/createHotel/steps/2/" + res.data.id);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setOpen(true);
            setMessage("We have a problem, try again later.");
          });
      })
      .catch((error) => {
        console.log("get ERROR:", error);
      });
  }

  return (
    <>
      <div className="containter m-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card-body">
              <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="stepper-container-horizontal  ">
                  <div className="col"></div>
                  <div
                    className={`admin-panel ${toggled ? "toggled" : ""} d-flex`}
                    title="a1"
                  >
                    <div className="w-100" title="a2">
                      <div className="container py-5 px-lg-5" title="a3">
                        <h2 className="mb-4 fw-bold d-flex" title="a4">
                          <DomainAddIcon className="me-2" fontSize="large" />
                          Create Hotel
                        </h2>
                        <HotelCreationForm
                          handleSubmit={handleSubmit}
                          loading={loading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={
            message === "Please fill in the blanks." ? "error" : "success"
          }
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>{" "}
    </>
  );
}

export default CreateHotel;
