import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const PlainTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "&.MuiFormControl-root": {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderWidth: "0px",
    },
  },
});
