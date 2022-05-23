// import * as React from "react";


// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';



// function Image_upload() {


//     const [open, setOpen] = React.useState(false);
//     const [fileObjects, setFileObjects] = React.useState([]);
//     const Dialogue = () => (
//         <>
//           <span>Upload file</span>
//           <IconButton
//             style={{right: '12px', top: '8px', position: 'absolute'}}
//             onClick={() => setOpen(false)}>
//             <CloseIcon />
//           </IconButton>
//         </>
//       );

      
//     return (
//         <div>   

// <div>
//         <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
//           Add Image
//         </Button>
      
//         <DropzoneDialogBase
//           dialogTitle={Dialogue()}
//           acceptedFiles={['image/*']}
//           fileObjects={fileObjects}
//           cancelButtonText={"cancel"}
//           submitButtonText={"submit"}
//           maxFileSize={5000000}
//           open={open}
//           onAdd={newFileObjs => {
//             console.log('onAdd', newFileObjs);
//             setFileObjects([].concat(fileObjects, newFileObjs));
//           }}
//           onDelete={deleteFileObj => {
//             console.log('onDelete', deleteFileObj);
//           }}
//           onClose={() => setOpen(false)}
//           onSave={() => {
//             console.log('onSave', fileObjects);
//             setOpen(false);
//           }}
//           showPreviews={true}
//           showFileNamesInPreview={true}
//         />
//       </div>
      
//         </div>
//     );
// }



// export default Image_upload;
