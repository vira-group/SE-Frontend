import axios from "axios";
import { useState, useEffect } from "react";
import { cookies, makeURL, set_cookie } from "../../../Utils/common";
import references from "../../../assets/References.json";
import ImagesGallery from "./ImagesGallery";


function PreviewMultipleImages(props) {
  const [file, setFile] = useState([]);
  const [images, setImages] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    setImages([...images, e.target.files[0]]);
    // console.log("images", images);
  }

  function upload(e) {
    const url = window.location.pathname.split("/")[3];
    // console.log(url);
    let hotelid = window.location.pathname.split("/")[2];
    e.preventDefault();
    console.log(images);
    images.forEach((image) => {
      let form_data = new FormData();
      form_data.append("image", image, image.name);
      url === "edithotel" ? (
        axios
        .post(
          makeURL(references.url_onehotelImage + "/" + hotelid + "/images/"),

          form_data,

          {
            headers: {
              Authorization: cookies.get("Authorization"),
            },
          }
        )
        .then((response) => {
          console.log("status code: ", response.data);
          // document.location.reload(true);
        })
        .catch((error) => {
          console.log("error: ", error);
        })
      ) : (
        axios
        .post(
          makeURL(references.url_hotelrooms + props.roomid + "/images/"),

          form_data,

          {
            headers: {
              Authorization: cookies.get("Authorization"),
            },
          }
        )
        .then((response) => {
          console.log("status code: ", response.data);
          // document.location.reload(true);
        })
        .catch((error) => {
          console.log("error: ", error);
        })
      )
      
    });
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    const i = images.filter((item, index) => index != e);
    setFile(s);
    setImages(i);
    console.log(i);
  }

  useEffect(() => {
    console.log("images: ", images);
  }, [images]);

  return (
    <form>
      <div className="form-group preview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div className="col" key={item}>
                <img
                  src={item}
                  className="m-3"
                  alt=""
                  style={{ width: "200px", height: "100px" }}
                />
                <button
                  type="button"
                  className="btn edit-hotel"
                  onClick={() => deleteFile(index)}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>

      <div className="col-lg-8">
        <input
          type="file"
          name="myImage"
          accept="image/*"
          disabled={file.length === 5}
          onChange={uploadSingleFile}
        />
      </div>
      <button type="button" className="btn m-2 edit-hotel" onClick={upload}>
        Upload
      </button>
    </form>
  );
}
export default PreviewMultipleImages;
