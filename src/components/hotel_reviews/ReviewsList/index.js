import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function ReviewsList({ sx = {}, reviews }) {
  return (
    <Box
      sx={{
        ...sx,
        width: "500px",
        height: "300px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      {reviews.map((review, index) => (
        <Card key={index} sx={{ my: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Rating name={`rating-${index}`} value={review.rating} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {review.date}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {review.comment}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Reviewed by: {review.author}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
