import react, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function SingleFavoriteCard(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  // handle request to backend when click on heart button
  const handleClick = () => {
    setIsFavorite(!isFavorite);
    // request to backend
  };

  return (
    <div class="col">
      <div class="card h-100">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
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
