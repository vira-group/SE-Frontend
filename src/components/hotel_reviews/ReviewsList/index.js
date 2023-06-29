import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Chip } from "@mui/material";

export default function ReviewsList({ sx = {}, reviews }) {
  return (
    <Box
      sx={{
        ...sx,
        width: "500px",
        height: "350px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      {reviews.map((review, index) => (
        <Card key={index}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
              <Rating
                size="small"
                name={`rating-${index}`}
                value={review.rate}
                readOnly
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {review.date}
              </Typography>
              {review.tag.map((tag) => (
                <Chip size="small" key={tag.id} label={tag.name} />
              ))}
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {review.text}
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
