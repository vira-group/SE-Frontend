import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

export default function SingleTopHotelCard(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  // handle request to backend when click on heart button
  const handleClick = () => {
    setIsFavorite(!isFavorite);
    // request to backend
  };

  return (
    <div class="col">
      <div class="card h-100 shadow">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="mb-2 d-flex">
            <StarIcon className="rate-icon-style me-1" />
            <span>{props.score}</span>
          </div>
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text text-muted">
            {props.country}/{props.city}
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-primary view-hotel-button">
            View details
          </button>
          <button className="btn favorite-btn-style" onClick={handleClick}>
            {isFavorite ? (
              <FavoriteIcon className="favorite-icon-style" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
