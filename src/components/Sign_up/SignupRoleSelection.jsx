import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

function SignupRoleSelection() {
  const options = {
    customer: "I am planning to search, view and reserve hotels",
    company: "I am planning to manage and advertise my hotels",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography variant="h6">
        How are you going to use Hotel Center?
      </Typography>
      <RadioGroup>
        <FormControlLabel
          value="customer"
          control={<Radio />}
          label={options["customer"]}
        ></FormControlLabel>
        <FormControlLabel
          value="company"
          control={<Radio />}
          label={options["company"]}
        ></FormControlLabel>
      </RadioGroup>
    </Box>
  );
}

export default SignupRoleSelection;
