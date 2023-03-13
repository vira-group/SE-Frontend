import Stepper from "./Stepper";
import HotelInfo2 from "./HotelInfo2";
import HotelInfo3 from "./HotelInfo3";
import HotelInfo4 from "./HotelInfo4";
import HotelInfo from "./HotelInfo";
import "../../css/Profile.css";
import "../CreateHotel/create.css";
import { useState } from "react";
import { useEffect } from "react";

function Steps() {
  const stepsArray = [
    "Initial Hotel info",
    "Add details",
    "Upload images",
    "Hotel facilities",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [page, setPage] = useState(null);

  function updatePage() {
    switch (currentStep) {
      case 1:
        setPage(<HotelInfo />);
        break;
      case 2:
        setPage(<HotelInfo2 />);
        break;
      case 3:
        setPage(<HotelInfo3 />);
        break;
      case 4:
        setPage(<HotelInfo4 />);
        break;
      default:
        break;
    }
  }

  function handleClick(clickType) {
    if (clickType === "next" && currentStep < 4) {
      setCurrentStep((currentStep) => currentStep + 1);
    }
    if (clickType === "previous" && currentStep > 1) {
      setCurrentStep((currentStep) => currentStep - 1);
    }
  }

  useEffect(() => {
    updatePage();
  }, [currentStep]);

  const prevButton = (
    <span className="me-4">
      <button
        className="btn edit-hotel1"
        onClick={() => handleClick("previous")}
      >
        Previous
      </button>
    </span>
  );

  const nextButton = (
    <span className="me-4">
      <button className="btn edit-hotel1" onClick={() => handleClick("next")}>
        Next
      </button>
    </span>
  );

  return (
    <div className="containter m-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card-body">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="stepper-container-horizontal  ">
                <div className="col">
                  <div className="row">
                    <div className="d-none d-lg-block">
                      <Stepper
                        direction="horizontal"
                        currentStepNumber={currentStep - 1}
                        steps={stepsArray}
                        stepColor="#cd9a2d"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row">
                    <br />
                    <br />
                    <div className="row">
                      {/* d-sm-none
										 d-none d-sm-block
                      */}
                      <div className="col-1 col-lg-1 d-none d-md-block" />

                      <div className="col-4 col-lg-8 d-md-none" />
                      <div className="col-5 col-lg-8 d-none d-md-block" />

                      <div
                        className="col-2 col-lg-1 float-right  d-md-none"
                        style={{ marginRight: "30px" }}
                      >
                        {currentStep > 1 && prevButton}
                      </div>
                      <div
                        className="col-2 col-lg-1 float-right d-none d-md-block"
                        style={{ marginRight: "20px" }}
                      >
                        {currentStep > 1 && prevButton}
                      </div>

                      <div
                        className="col-2 col-lg-1  zero d-md-none"
                        style={{ marginRight: "1px" }}
                      >
                        {currentStep < 4 && nextButton}
                      </div>
                      <div
                        className="col-2 col-lg-1  zero d-none d-md-block"
                        style={{ marginRight: "10px" }}
                      >
                        {currentStep < 4 && nextButton}
                      </div>

                      <div className="col-1 col-lg-1 d-md-none" />
                    </div>
                  </div>
                  <div className="row">{page}</div>
                </div>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
