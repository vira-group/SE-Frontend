import { useState } from "react";
import ImagesGallery from "./ImagesGallery";
function PreviewMultipleImages() {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
    <form>
      <div className="form-group preview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div className="col" key={item}>
                <img src={item} className="m-3" alt="" style={{width: "200px", height:"100px"}}/>
                <button type="button" className="btn edit-hotel" onClick={() => deleteFile(index)}>
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
      <button
        type="button"
        className="btn m-2 edit-hotel"
        onClick={upload}
      >
        Upload
      </button>
    </form>
  );
}
export default PreviewMultipleImages;
