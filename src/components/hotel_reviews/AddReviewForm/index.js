import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";

export default function AddReviewForm(props) {
  const tags = ["Cheap", "Expensive", "Luxurious"];
  const { handleSubmit } = props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const validationSchema = yup.object({
    rating: yup.number().positive("Please give a rating"),
    comment: yup.string().required("Please write the review"),
    tag: yup.array(),
  });
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
      tag: [],
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: 500,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="body2">Add a review for this hotel:</Typography>
      <TextField
        name="comment"
        multiline
        rows={5}
        variant="outlined"
        placeholder="Your comment"
        fullWidth
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={formik.touched.comment && formik.errors.comment}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
      />
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel id="tag-label">Tags</InputLabel>
        <Select
          labelId="tag-label"
          id="tag"
          name="tag"
          multiple
          value={formik.values.tag}
          onChange={formik.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Rating
          name="rating"
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          variant="contained"
        >
          Add review
        </Button>
      </Box>
    </Box>
  );
}
