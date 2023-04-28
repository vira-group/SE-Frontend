import { useState } from "react";
import { cookies, makeURL } from "../../../Utils/common";
import references from "../../assets/References.json";
import axios from "axios";

export default useHotelInfo = (initialData) => {
  const [hotel] = useState(initialData);
  const [isFavorite, setIsFavorite] = useState(false);

  async function toggleIsFavorite() {
    axios
      .post(
        makeURL(references.url_addfavoritehotel),
        { hotel_id: hotel.id },
        {
          headers: {
            Authorization: cookies.get("Authorization"),
          },
        }
      )
      .then((response) => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
        return response;
      })
      .catch((error) => {
        throw error.response;
      });
  }

  return {
    hotel,
    isHotelFavorite: isFavorite,
    toggleIsHotelFavorite: toggleIsFavorite,
  };
};
