import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";

export default function AddReviewForm(props) {
  const { handleSubmit } = props;
  const validationSchema = yup.object({
    rating: yup.number().positive("Please give a rating"),
    comment: yup.string().required("Please write the review"),
  });
  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
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
