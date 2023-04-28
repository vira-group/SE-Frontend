import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const PlainTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#cd9a2d",
  },
  // "& .MuiOutlinedInput-notchedOutline": {
  // borderWidth: "0px",
  // },
  "& .MuiInputBase-input": {
    color: "black",
  },
  // "& .MuiInputBase-root": {
  //   backgroundColor: "red",
  // },
  "&.MuiFormControl-root": {
    color: "black",
    backgroundColor: "white",
    borderRadius: "4px",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      color: "black",
      borderColor: "#cd9a2d",
    },
  },
  input: {
    "&::placeholder": {
      color: "gray",
      opacity: 1,
    },
  },
});
